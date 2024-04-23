import DatePicker from "@components/DatePicker";
import Select from "@components/Select";
import TextInput from "@components/TextInput";
import { ComponentProps } from "react";
import {
  SoleTraderFormContext,
  TSoleTraderFormContext,
} from "./SoleTraderFormContext";
import SoleTraderFormValues from "./soleTraderForm";
import { ABNForms } from "app/types/types";

const SoleTraderSelect = (
  props: Omit<ComponentProps<typeof Select<ABNForms["soleTrader"]>>, "context">
) => {
  return (
    <Select<ABNForms["soleTrader"]>
      context={SoleTraderFormContext}
      {...props}
    />
  );
};

const SoleTraderTextInput = (
  props: Omit<
    ComponentProps<typeof TextInput<ABNForms["soleTrader"]>>,
    "context"
  >
) => {
  return (
    <TextInput<ABNForms["soleTrader"]>
      context={SoleTraderFormContext}
      {...props}
    />
  );
};

const SoleTraderDatePicker = (
  props: Omit<
    ComponentProps<typeof DatePicker<ABNForms["soleTrader"]>>,
    "context"
  >
) => {
  return (
    <DatePicker<ABNForms["soleTrader"]>
      context={SoleTraderFormContext}
      {...props}
    />
  );
};

export { SoleTraderDatePicker, SoleTraderSelect, SoleTraderTextInput };
