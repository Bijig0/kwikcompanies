"use server";

import { getErrorRedirect, getURL } from "@utils/helpers";
import { stripe } from "@utils/stripe/config";
import { createOrRetrieveCustomer } from "@utils/supabase/admin";
import { createClient } from "@utils/supabase/server";
import truncateKeys from "@utils/truncateKeys";
import { Tables } from "app/types/types_db";
import dot from "dot-object";
import Stripe from "stripe";

type Price = Tables<"prices">;

type CheckoutResponse = {
  errorRedirect?: string;
  sessionId?: string;
};

type User = {
  email: string;
};

type Args = {
  prices: Price[];
  user: User;
  formValues: Record<PropertyKey, any>;
  paths: {
    cancelPath: string;
    errorPath: string;
    successPath: string;
  };
};

export async function checkoutWithStripe(
  args: Args
): Promise<CheckoutResponse> {
  const {
    prices,
    user,
    formValues,
    paths: { cancelPath, errorPath, successPath },
  } = args;

  const dotNotationFormValues = dot.dot(formValues);
  const truncated = truncateKeys(dotNotationFormValues);
  console.log(truncated);

  try {
    // Get the user from Supabase auth

    // Retrieve or create the customer in Stripe

    const lineItems = prices.map(({ id }) => ({ price: id, quantity: 1 }));

    let params: Stripe.Checkout.SessionCreateParams = {
      allow_promotion_codes: true,
      metadata: truncated,
      // billing_address_collection: "required",
      customer_email: user.email,
      line_items: lineItems,
      cancel_url: getURL(cancelPath),
      success_url: getURL(successPath),
      mode: "payment",
    };

    console.log(params);

    // Create a checkout session in Stripe
    let session;
    try {
      session = await stripe.checkout.sessions.create(params);
    } catch (err) {
      console.error(err);
      console.log(err);
      throw new Error("Unable to create checkout session.");
    }

    // Instead of returning a Response, just return the data or error.
    if (session) {
      return { sessionId: session.id };
    } else {
      console.log("Running2");
      throw new Error("Unable to create checkout session.");
    }
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return {
        errorRedirect: getErrorRedirect(
          errorPath,
          error.message,
          "Please try again later or contact a system administrator."
        ),
      };
    } else {
      return {
        errorRedirect: getErrorRedirect(
          errorPath,
          "An unknown error occurred.",
          "Please try again later or contact a system administrator."
        ),
      };
    }
  }
}

export async function createStripePortal(currentPath: string) {
  try {
    const supabase = createClient();
    const {
      error,
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      if (error) {
        console.error(error);
      }
      throw new Error("Could not get user session.");
    }

    let customer;
    try {
      customer = await createOrRetrieveCustomer({
        uuid: user.id || "",
        email: user.email || "",
      });
    } catch (err) {
      console.error(err);
      throw new Error("Unable to access customer record.");
    }

    if (!customer) {
      throw new Error("Could not get customer.");
    }

    try {
      const { url } = await stripe.billingPortal.sessions.create({
        customer,
        return_url: getURL("/account"),
      });
      if (!url) {
        throw new Error("Could not create billing portal");
      }
      return url;
    } catch (err) {
      console.error(err);
      throw new Error("Could not create billing portal");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return getErrorRedirect(
        currentPath,
        error.message,
        "Please try again later or contact a system administrator."
      );
    } else {
      return getErrorRedirect(
        currentPath,
        "An unknown error occurred.",
        "Please try again later or contact a system administrator."
      );
    }
  }
}
