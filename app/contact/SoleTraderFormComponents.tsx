import DatePicker from "@components/DatePicker";
import Select from "@components/Select";
import TextInput from "@components/TextInput";
import { ComponentProps } from "react";
import SoleTraderFormValues from "./soleTraderForm";

const SoleTraderSelect = (
  props: ComponentProps<typeof Select<SoleTraderFormValues>>
) => {
  return <Select<SoleTraderFormValues> {...props} />;
};

const SoleTraderTextInput = (
  props: ComponentProps<typeof TextInput<SoleTraderFormValues>>
) => {
  return <TextInput<SoleTraderFormValues> {...props} />;
};

const SoleTraderDatePicker = (
  props: ComponentProps<typeof DatePicker<SoleTraderFormValues>>
) => {
  return <DatePicker<SoleTraderFormValues> {...props} />;
};

export { SoleTraderDatePicker, SoleTraderSelect, SoleTraderTextInput };
