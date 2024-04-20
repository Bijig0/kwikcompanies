import { create } from "zustand";
import FormValues from "./partnershipForm";
type SoleTraderFormState = {
  soleTraderDetails: FormValues;
  updateSoleTraderDetails: (toUpdate: PartialSoleTraderFormState) => void;
};

type PartialSoleTraderFormState = Partial<SoleTraderFormState>;

const soleTraderFormStore = create<SoleTraderFormState>((set) => ({
  soleTraderDetails: {} as FormValues,
  updateSoleTraderDetails: (toUpdate: PartialSoleTraderFormState) => {
    set((state) => ({ ...state, ...toUpdate }));
  },
}));

export default soleTraderFormStore;
