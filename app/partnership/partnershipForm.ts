import { useForm } from "react-hook-form";
import { Country } from "./countries";

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
      otherName?: string;
    }
  | {
      answer: true;
      otherName: string;
    };

type TradingUnderBusinessName =
  | {
      answer: true;
      businessName: string;
    }
  | {
      answer: false;
    };

export const australianStates = [
  "New South Wales",
  "Western Australia",
  "South Australia",
  "Victoria",
  "Australian Capital Territory",
  "Tasmania",
  "Northern Territory",
  "Queensland",
] as const;

type AustralianState = (typeof australianStates)[number];

export const registrationPeriods = ["3 years", "1 year"] as const;

type RegistrationPeriod = (typeof registrationPeriods)[number];

type IsRegisteringBusinessName =
  | {
      answer: true;
      registrationPeriod: RegistrationPeriod;
      birthLocation:
        | {
            country: "Australia";
            state: AustralianState;
            city: string;
          }
        | {
            country: Exclude<Country, "Australia">;
          };
    }
  | {
      answer: false;
    };

export const partnerTypes = ["Individual", "Company"] as const;

type PartnerType = (typeof partnerTypes)[number];

type Name = {
  title: Title;
  firstName: string;
  lastName: string;
  otherNames: KnownByOtherName;
};

type BirthLocation =
  | {
      country: "Australia";
      state: AustralianState;
      city: string;
    }
  | {
      country: Exclude<Country, "Australia">;
    };

type PartnerDetails = {
  partnerType: PartnerType;
  name: Name;
  email: string;
  phoneNumber: string;
  dateOfBirth: Date;
  birthLocation: BirthLocation;
  taxFileNumber: string;
  homeAddress: string;
  declaredIsAustralianResidentForTaxPurposes: boolean;
};

type TBusinessLocation = {
  businessAddress: string;
  addressForServiceDocuments: string;
};

const businessHistoriesOfAllPartners = [
  "This is our first time doing business in Australia.",
  "We have been in business in Australia before.",
] as const;

type BusinessHistoriesOfAllPartners = (typeof businessHistories)[number];

type TBusinessNameApplication = {
  businessName: TradingUnderBusinessName;
  isRegisteringBusinessName: IsRegisteringBusinessName;
};

type TGSTRegistration = {
  registerForGst: boolean;
};

type TABNEntitlement = {
  activitiesLocation: ActivitiesLocation;
  needAbnReason: NeedAbnReason;
};

type TABNRegistrationDetails = {
  abnActiveDate: Date;
  mainBusinessActivity: string;
  businessCategory: string;
  businessHistoriesOfAllPartners: BusinessHistoriesOfAllPartners;
  partnersRelated: boolean;
};

type PartnerShipFormValues = {
  abnEntitlement: TABNEntitlement;
  partnerDetails: PartnerDetails[];
  businessLocation: TBusinessLocation;
  businessNameApplication: TBusinessNameApplication;
  abnRegistrationDetails: TABNRegistrationDetails;
  registerForGST: TGSTRegistration;
  agreedToTermsAndServices: boolean;
};

export type PartnershipFormRegisterable = Parameters<
  ReturnType<typeof useForm<PartnerShipFormValues>>["register"]
>[0];

export default PartnerShipFormValues;
