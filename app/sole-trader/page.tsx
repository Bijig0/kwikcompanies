"use client";
import PageBanner from "@components/PageBanner";
import emailjs from "@emailjs/browser";
import AkpagerLayout from "@layouts/AkpagerLayout";

import ErrorText from "@components/ErrorText";
import { QueryClientProvider } from "@tanstack/react-query";
import { getErrorRedirect } from "@utils/helpers";
import { getStripe } from "@utils/stripe/client";
import { checkoutWithStripe } from "@utils/stripe/server";
import { Tables } from "app/types/types_db";
import { Urls } from "app/types/urls";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import SoleTraderFormProvider, {
  useSoleTraderFormContext,
} from "./SoleTraderFormContext";
import { queryClient } from "./sole-trader/queryClient";
import SoleTraderFormValues from "./soleTraderForm";
import useGetSoleTraderProducts from "./useGetSoleTraderProducts";

type Price = Tables<"prices">;

type User = {
  email: string;
};

const _Page = () => {
  const {
    formDisabled,
    onError,
    formManager: {
      handleSubmit,
      getValues,
      formState: { errors },
    },
  } = useSoleTraderFormContext();

  const router = useRouter();

  const { data: products, isLoading, error } = useGetSoleTraderProducts();

  const onSubmit = (data: SoleTraderFormValues) => {
    console.log(data);
    sendEmail(data);

    const user = { email: "bradysuryasie@gmail.com" } satisfies User;

    // const user = { email: data.soleTraderDetails.email } satisfies User;
    const examplePrice = products[0].prices[0];
    handleStripeCheckout(user, examplePrice);
  };

  const errorsPresent = Object.keys(errors).length !== 0;

  const sendEmail = async (inputs: SoleTraderFormValues) => {
    const templateParams = {
      to_name: "Brady",
      from_name: "Tutoring",
      subject: "New Tutoring Person From Contact us",
      message: `New From Contact Us, details: ${JSON.stringify(inputs)}`,
    };

    const serviceId = "service_010xydf";
    const templateName = "template_1dcm4rn";
    const publicKey = "Yd6r5t5etWEKD3GNh";
    return emailjs.send(serviceId, templateName, templateParams, publicKey);
  };

  const handleStripeCheckout = async (user: User, price: Price) => {
    const { errorRedirect, sessionId } = await checkoutWithStripe(
      price,
      user,
      Urls["Error"]
    );

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

  const handleClick = () => {
    console.log(getValues());
  };

  return (
    <AkpagerLayout onePage>
      {/* <Script src={GOOGLE_MAPS_URL} strategy="beforeInteractive" /> */}
      <PageBanner pageName={"Individual ABN Form"} />
      {/* Contact Page Start */}
      <section className="py-16 contact-page rpy-100">
        <div className="mx-auto px-4 lg:px-8 w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1750px]">
          <div className="flex justify-center row gap-100 align-items-center">
            <div className="col-lg-7">
              <div className="contact-form br-10 bgc-lighter rmt-60">
                <button type="button" onClick={handleClick}>
                  Click Me
                </button>
                <form
                  id="contactForm"
                  className="flex flex-col contactForm"
                  name="contactForm"
                  onSubmit={handleSubmit(onSubmit, onError)}
                >
                  {/* <button
                    type="button"
                    onClick={() => console.log(getValues())}
                  >
                    Click Me
                  </button> */}
                  {/* <BusinessDetails />
                  <Divider />
                  <ABNEntitlement />
                  <Divider />

                  <SoleTraderDetails />
                  <Divider />

                  <BusinessLocation />
                  <Divider />

                  <ABNRegistrationDetails />
                  <Divider />

                  <BusinessNameApplication />
                  <Divider />

                  <GSTRegistration />
                  <Divider />

                  <Declaration /> */}
                  <div className="my-3" />
                  <Button
                    disabled={formDisabled}
                    type="submit"
                    className={`px-4 py-2 mx-auto font-bold ${
                      formDisabled && "opacity-40"
                    }`}
                  >
                    Continue
                  </Button>
                  <div className="flex justify-center mt-4">
                    {errorsPresent && (
                      <ErrorText>
                        Some fields are not completed correctly, please check
                        your submission again
                      </ErrorText>
                    )}
                  </div>

                  {/* We can use the "status" to decide whether we should display the dropdown or not */}
                  {/* {status === "OK" && <ul>{renderSuggestions()}</ul>} */}
                  {/* <div className="col-md-12">
                    <div className="mb-0 form-group">
                      <button type="submit" className="theme-btn">
                        Send Us Message <i className="far fa-arrow-right" />
                      </button>
                      <div id="msgSubmit" className="hidden" />
                    </div>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AkpagerLayout>
  );
};

const Page = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SoleTraderFormProvider totalSteps={7}>
        <_Page />
      </SoleTraderFormProvider>
    </QueryClientProvider>
  );
};

export default Page;
