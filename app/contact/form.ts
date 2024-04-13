const businessHistory = [
  "This is my first time doing business in Australia",
  "I have been in Business in Australia before",
] as const;

type BusinessHistory = (typeof businessHistory)[number];

type HaveYouHadAnAbnInThePast =
  | {
      Answer: false;
    }
  | {
      Answer: true;
      prevAbn: string;
    };

type FormValues = {
  businessHistory: BusinessHistory;
  email: string;
  phone_number: string;
  message: string;
};

export default FormValues;
