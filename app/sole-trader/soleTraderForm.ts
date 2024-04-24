import { Country } from "app/types/countries";
import { useForm } from "react-hook-form";

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
      prevAbn?: never;
    }
  | {
      answer: true;
      prevAbn: string;
    };

type KnownByOtherName =
  | {
      answer: false;
      otherName?: never;
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
      businessName?: never;
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

type TBusinessDetails = {
  businessHistory: BusinessHistory;
  hasPreviousAbn: HasPreviousAbn;
};

type TABNEntitlement = {
  activitiesLocation: ActivitiesLocation;
  needAbnReason: NeedAbnReason;
};

type Name = {
  title: Title;
  firstName: string;
  lastName: string;
  otherNames: KnownByOtherName;
};

type TSoleTraderDetails = {
  name: Name;
  email: string;
  phoneNumber: string;
  dateOfBirth: Date;
  taxFileNumber: string;
};

type Address = {
  full_address: string;
  address_line_1: string;
  address_line_2: string;
  address_level_1: string;
  address_level_2: string;
  postcode: string;
};

type BusinessAddress =
  | {
      isHomeAddress: true;
      address?: never;
    }
  | {
      isHomeAddress: false;
      address: Address;
    };

type ServiceDocumentAddress =
  | {
      isHomeAddress: true;
      address?: never;
    }
  | {
      isHomeAddress: false;
      address: Address;
    };

type TBusinessLocation = {
  homeAddress: Address;
  businessAddress: BusinessAddress;
  addressForServiceDocuments: ServiceDocumentAddress;
};

type TABNRegistrationDetails = {
  abnActiveDate: Date;
  mainBusinessActivity: string;
  businessCategory: string;
};

type TBusinessNameApplication = {
  businessName: TradingUnderBusinessName;
  isRegisteringBusinessName: IsRegisteringBusinessName;
};

type TGSTRegistration = {
  registerForGst: boolean;
};

type SoleTraderFormValues = {
  businessDetails: TBusinessDetails;
  abnEntitlement: TABNEntitlement;
  soleTraderDetails: TSoleTraderDetails;
  businessLocation: TBusinessLocation;
  abnRegistrationDetails: TABNRegistrationDetails;
  businessNameApplication: TBusinessNameApplication;
  gstRegistration: TGSTRegistration;
  agreedToTermsAndServices: boolean;
};

export type FormRegisterable = string;

export type SoleTraderFormRegisterable = Parameters<
  ReturnType<typeof useForm<SoleTraderFormValues>>["register"]
>[0];

export default SoleTraderFormValues;
