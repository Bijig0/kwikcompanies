import { Radio, RadioGroup } from "react-radio-group";

const RadioButtons = () => {
  return (
    <RadioGroup name="fruit">
      <Radio value="apple" />
      Apple
      <Radio value="orange" />
      Orange
      <Radio value="watermelon" />
      Watermelon
    </RadioGroup>
  );
};
export default RadioButtons;
