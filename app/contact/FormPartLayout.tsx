import React from "react";

type Props = {
  header: string;
  step: number;
  children: React.ReactNode;
};

const FormPartLayout = (props: Props) => {
  const { header, step, children } = props;
  return (
    <div>
      <h5>{header}</h5>
      <p>Step {step} of 8</p>
      <div className="my-2"></div>
      {children}
    </div>
  );
};

export default FormPartLayout;
