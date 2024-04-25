import { Tables } from "app/types/types_db";
import { Urls } from "app/types/urls";
import router from "next/router";
import { getErrorRedirect } from "./helpers";
import { getStripe } from "./stripe/client";
import { checkoutWithStripe } from "./stripe/server";

type Price = Tables<"prices">;

type User = {
  email: string;
};

const handleStripeCheckout = async (
  user: User,
  prices: Price[],
  formValues: Record<PropertyKey, any>
) => {
  const { errorRedirect, sessionId } = await checkoutWithStripe({
    prices,
    user,
    formValues,
    paths: {
      successPath: Urls["Checkout Success"],
      cancelPath: Urls.Home,
      errorPath: Urls.Error,
    },
  });

  if (errorRedirect) {
    return router.push(errorRedirect);
  }

  if (!sessionId) {
    return router.push(
      getErrorRedirect(
        Urls.Error,
        "An unknown error occurred.",
        "Please try again later or contact a system administrator."
      )
    );
  }

  const stripe = await getStripe();
  stripe?.redirectToCheckout({ sessionId });
};

export default handleStripeCheckout;
