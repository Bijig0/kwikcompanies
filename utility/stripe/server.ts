"use server";

import {
  calculateTrialEndUnixTimestamp,
  getErrorRedirect,
  getURL,
} from "@utils/helpers";
import { stripe } from "@utils/stripe/config";
import { createOrRetrieveCustomer } from "@utils/supabase/admin";
import { createClient } from "@utils/supabase/server";
import { Tables } from "app/types/types_db";
import Stripe from "stripe";

type Price = Tables<"prices">;

type CheckoutResponse = {
  errorRedirect?: string;
  sessionId?: string;
};

type User = {
  email: string;
};

export async function checkoutWithStripe(
  price: Price,
  user: User,
  redirectPath: string = "/account"
): Promise<CheckoutResponse> {
  try {
    // Get the user from Supabase auth

    // Retrieve or create the customer in Stripe

    let params: Stripe.Checkout.SessionCreateParams = {
      allow_promotion_codes: true,
      billing_address_collection: "required",
      customer_email: user.email,
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      cancel_url: getURL(),
      success_url: getURL(redirectPath),
    };

    console.log(
      "Trial end:",
      calculateTrialEndUnixTimestamp(price.trial_period_days)
    );
    console.log(price.type);

    if (price.type === "one_time") {
      params = {
        ...params,
        mode: "payment",
      };
    }

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
          redirectPath,
          error.message,
          "Please try again later or contact a system administrator."
        ),
      };
    } else {
      return {
        errorRedirect: getErrorRedirect(
          redirectPath,
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
