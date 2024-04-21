import CompanyFormValues from "app/company/companyForm";
import { useFieldArray } from "react-hook-form";

export const numberText = {
  "1": "First",
  "2": "Second",
  "3": "Third",
  "4": "Fourth",
  "5": "Fifth",
  "6": "Sixth",
  "7": "Seventh",
  "8": "Eighth",
  "9": "Ninth",
  "10": "Tenth",
} as const;

export type DirectorFieldsManager = ReturnType<
  typeof useFieldArray<
    CompanyFormValues,
    "directorAndPublicOfficerDetails.directorsDetails",
    "id"
  >
>;

export type ShareholderFieldsManager = ReturnType<
  typeof useFieldArray<
    CompanyFormValues,
    "directorAndPublicOfficerDetails.shareholdersDetails",
    "id"
  >
>;

export type DirectorFields = DirectorFieldsManager["fields"];
export type ShareholderFields = ShareholderFieldsManager["fields"];
