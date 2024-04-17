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
export type ActivitiesLocation = (typeof activitiesLocations)[number];

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

type HasPreviousAbn =
  | {
      answer: false;
    }
  | {
      answer: true;
      prevAbn: string;
    };

type KnownByOtherName =
  | {
      answer: false;
    }
  | {
      answer: true;
      otherName: string;
    };

type FormValues = {
  businessHistory: BusinessHistory;
  hasPreviousAbn: HasPreviousAbn;
  phone_number: string;
  message: string;
  activitiesLocation: ActivitiesLocation;
  needAbnReason: NeedAbnReason;
  title: Title;
  firstName: string;
  otherNames: KnownByOtherName;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: Date;
  abnActiveDate: Date;
  taxFileNumber: string;
  isAustralianResident: boolean;
  address: string;
  businessLocation: string;
  addressForServiceDocuments: string;
  businessName: string;
};

export default FormValues;
