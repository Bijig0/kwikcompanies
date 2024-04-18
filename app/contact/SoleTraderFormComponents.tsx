import DatePicker from "@components/DatePicker";
import Select from "@components/Select";
import TextInput from "@components/TextInput";
import { ComponentProps } from "react";
import { SoleTraderFormRegisterable } from "./form";

const SoleTraderSelect = (
  props: ComponentProps<typeof Select<SoleTraderFormRegisterable>>
) => {
  return <Select<SoleTraderFormRegisterable> {...props} />;
};

const SoleTraderTextInput = (
  props: ComponentProps<typeof TextInput<SoleTraderFormRegisterable>>
) => {
  return <TextInput<SoleTraderFormRegisterable> {...props} />;
};

const SoleTraderDatePicker = (
  props: ComponentProps<typeof DatePicker<SoleTraderFormRegisterable>>
) => {
  return <DatePicker<SoleTraderFormRegisterable> {...props} />;
};

export { SoleTraderSelect, SoleTraderTextInput };
