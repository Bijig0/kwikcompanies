import React from "react";

type Props = {
  header: string;
  step: number;
  children: React.ReactNode;
};

const FormPartLayout = (props: Props) => {
  const { header, step, children } = props;
  const totalSteps = 1;
  return (
    <div>
      <h5>{header}</h5>
      <p>
        Step {step} of {totalSteps}
      </p>
      <div className="my-2"></div>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
};

export default FormPartLayout;
