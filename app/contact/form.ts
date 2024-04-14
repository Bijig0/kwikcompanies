export const businessHistories = [
  "This is my first time doing business in Australia",
  "I have been in Business in Australia before",
] as const;

type BusinessHistory = (typeof businessHistories)[number];

export type HaveYouHadAnAbnInThePast =
  | {
      Answer: false;
    }
  | {
      Answer: true;
      prevAbn: string;
    };

export const activitiesLocations = ["Australia", "Overseas"] as const;
type ActivitiesLocation = (typeof activitiesLocations)[number];

export const needAbnReasons = [
  "Starting or running a business",
  "Renting or leasing out a residential property on a regular or continual basis",
  "A licence, lease or other grant of interest in property on a regular or continual basis",
  "One-off commercial transactions not done in the course of a business for a profit or gain",
  "Labourer, Apprentice or Trade Assistant",
];

type NeedAbnReason = (typeof needAbnReasons)[number];

export const titles = ["Mr", "Mrs", "Miss", "Ms", "Dr", "Other"] as const;

type Title = (typeof titles)[number];

type DateOfBirth = {
  year: number;
  month: number;
  day: number;
};

export const addressForServiceDocuments = ["Home", "Other"] as const;

type AddressForServiceDocuments = (typeof addressForServiceDocuments)[number];

type FormValues = {
  businessHistory: BusinessHistory;
  phone_number: string;
  message: string;
  activitiesLocation: ActivitiesLocation;
  needAbnReason: NeedAbnReason;
  title: Title;
  givenNames: string[];
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: DateOfBirth;
  taxFileNumber: string;
  isAustralianResident: boolean;
  address: string;
  isBusinessLocatedAtHomeAddress: boolean;
  addressForServiceDocuments: AddressForServiceDocuments;
};

export default FormValues;
