import DatePicker from "@components/DatePicker";
import Select from "@components/Select";
import TextInput from "@components/TextInput";
import { ComponentProps } from "react";
import {
  SoleTraderFormContext,
  TSoleTraderFormContext,
} from "./SoleTraderFormContext";
import SoleTraderFormValues from "./soleTraderForm";

const SoleTraderSelect = (
  props: Omit<
    ComponentProps<typeof Select<SoleTraderFormValues, TSoleTraderFormContext>>,
    "context"
  >
) => {
  return (
    <Select<SoleTraderFormValues, TSoleTraderFormContext>
      context={SoleTraderFormContext}
      {...props}
    />
  );
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
