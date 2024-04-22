"use client";
import PageBanner from "@components/PageBanner";
import AkpagerLayout from "@layouts/AkpagerLayout";

import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import Divider from "../../components/Divider";
import ChooseStructure from "./ChooseStructure";
import { ChooseStructureFormValues, Structure } from "./chooseStructureForm";

const structureURL = {
  Company: "/company",
  Partnership: "/partnership",
  "Individual or Sole Trader": "/sole-trader",
} satisfies Record<Structure, string>;

const _Page = () => {
  const { handleSubmit } = useFormContext();
  const router = useRouter();

  const onSubmit = (data: ChooseStructureFormValues) => {
    const url = structureURL[data.structure];
    router.push(url);
  };

  return (
    <AkpagerLayout>
      {/* <Script src={GOOGLE_MAPS_URL} strategy="beforeInteractive" /> */}
      <PageBanner pageName={"Register an ABN"} />
      {/* Contact Page Start */}
      <section className="py-16 contact-page rpy-100">
        <div className="mx-auto px-4 lg:px-8 w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1750px]">
          <div className="flex justify-center row gap-100 align-items-center">
            <div className="col-lg-7">
              <div className="contact-form br-10 bgc-lighter rmt-60">
                <form
                  id="contactForm"
                  className="flex flex-col contactForm"
                  name="contactForm"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <ChooseStructure />
                  <Divider />

                  <div className="my-3" />
                  <Button type="submit" className="px-4 py-2 mx-auto font-bold">
                    Continue
                  </Button>
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
  const methods = useForm<ChooseStructureForm>();

  return (
    <FormProvider {...methods}>
      <_Page />;
    </FormProvider>
  );
};

export default Page;
