import React from "react";
import { useCompanyFormContext } from "./CompanyFormContext";

type Props = {
  header: string;
  step: number;
  children: React.ReactNode;
};

const PartnerShipDetailsFormPartLayout = (props: Props) => {
  const { totalSteps } = useCompanyFormContext();
  const { header, step, children } = props;
  return (
    <div>
      <h5>{header}</h5>
      <p>
        Please provide details of all partners. If a partner is a company,
        please provide details of one representative.
      </p>
      <p></p>
      <p>
        Step {step} of {totalSteps}
      </p>
      <div className="my-2"></div>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
};

export default PartnerShipDetailsFormPartLayout;
