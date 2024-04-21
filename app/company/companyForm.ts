import { businessHistories } from "app/contact/soleTraderForm";
import { Country } from "app/types/countries";
import { useForm } from "react-hook-form";
import { Title } from "./individual";

export const entityTypes = ["Individual", "Company"] as const;

export type EntityType = (typeof entityTypes)[number];

export const activitiesLocations = ["Australia", "Overseas"] as const;
export type ActivitiesLocation = (typeof activitiesLocations)[number];

export const needAbnReasons = [
  "Starting or running a business",
  "Renting or leasing out a residential property on a regular or continual basis",
  "A licence, lease or other grant of interest in property on a regular or continual basis",
  "One-off commercial transactions not done in the course of a business for a profit or gain",
  "Labourer, Apprentice or Trade Assistant",
];

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

type TBusinessLocation = {
  businessAddress: string;
  addressForServiceDocuments: string;
};

type BusinessHistoriesOfAllPartners = (typeof businessHistories)[number];

type TBusinessNameApplication = {
  businessName: TradingUnderBusinessName;
  isRegisteringBusinessName: IsRegisteringBusinessName;
};

type TGSTRegistration = {
  registerForGst: boolean;
};

type TABNRegistrationDetails = {
  abnActiveDate: Date;
  mainBusinessActivity: string;
  businessCategory: string;
  businessHistoriesOfAllPartners: BusinessHistoriesOfAllPartners;
  partnersRelated: boolean;
};

type HasACN =
  | {
      answer: true;
      chosenACN: number;
    }
  | {
      answer: false;
      companyName: string;
    };

type isMajorityOwnedSubsidiary =
  | {
      answer: true;
      holdingCompanyACN: number;
    }
  | {
      answer: false;
      holdingCompanyACN?: never;
    };

type CompanyDetails = {
  hasACN: HasACN;
  isMajorityOwendSubsidiary: isMajorityOwnedSubsidiary;
};

type DirectorDetails = {
  name: Name;
  email: string;
  phoneNumber: string;
  dateOfBirth: Date;
  birthLocation: BirthLocation;
  taxFileNumber: string;
  homeAddress: string;
  declaredIsAustralianResidentForTaxPurposes: boolean;
};

type ShareHolderDetails = {
  entityType: EntityType;
  name: Name;
  dateOfBirth: Date;
  taxFileNumber: string;
  declaredIsAustralianResidentForTaxPurposes: boolean;
};

type DirectorAndPublicOfficersDetails = {
  directorsDetails: DirectorDetails[];
  shareholdersDetails: ShareHolderDetails[];
};

type CompanyFormValues = {
  companyDetails: CompanyDetails;
  directorAndPublicOfficerDetails: DirectorAndPublicOfficersDetails;
  businessLocation: TBusinessLocation;
  abnRegistrationDetails: TABNRegistrationDetails;
  businessNameApplication: TBusinessNameApplication;
  registerForGST: TGSTRegistration;
  agreedToTermsAndServices: boolean;
};

export type PartnershipFormRegisterable = Parameters<
  ReturnType<typeof useForm<CompanyFormValues>>["register"]
>[0];

export default CompanyFormValues;
