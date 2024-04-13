type Address = string;

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

const activitiesLocation = ["Australia", "Overseas"] as const;
type ActivitiesLocation = (typeof activitiesLocation)[number];

const needAbnReason = [
  "Starting or running a business",
  "Renting or leasing out a residential property on a regular or continual basis",
  "A licence, lease or other grant of interest in property on a regular or continual basis",
  "One-off commercial transactions not done in the course of a business for a profit or gain",
  "Labourer, Apprentice or Trade Assistant",
];

type NeedAbnReason = (typeof needAbnReason)[number];

const title = ["Mr", "Mrs", "Miss", "Ms", "Dr", "Other"] as const;

type Title = (typeof title)[number];

type CustomDate = {
  year: number;
  month: number;
  day: number;
};

type FormValues = {
  businessHistory: BusinessHistory;
  hadAbnInThePast: HaveYouHadAnAbnInThePast;
  phone_number: string;
  message: string;
  activitiesLocation: ActivitiesLocation;
  needAbnReason: NeedAbnReason;
  title: Title;
  givenNames: string[];
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: CustomDate;
  taxFileNumber: string;
  isAustralianResident: boolean;
  address: string;
  businessLocation: Address;
  addressForServiceDocuments: Address;
  abnActivateDate: CustomDate;
  mainBusinessActivity: string;
  businessCategory: string;
  businessName: string;
  registerForGst: boolean;
  acceptDeclaration: boolean;
};

export default FormValues;
