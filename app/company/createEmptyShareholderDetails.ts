import CompanyFormValues from "./companyForm";

export const createEmptyShareholderDetails =
  (): CompanyFormValues["directorAndPublicOfficerDetails"]["shareholdersDetails"] => [
    {
      entityType: "Individual",
      name: {
        title: "Mr",
        firstName: "",
        lastName: "",
        otherNames: {
          answer: false,
          otherName: "",
        },
      },
      dateOfBirth: new Date(),
      taxFileNumber: "",
      declaredIsAustralianResidentForTaxPurposes: false,
    },
  ];
