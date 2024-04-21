import CompanyFormValues from "./companyForm";

export const createEmptyDirectorDetails =
  (): CompanyFormValues["directorAndPublicOfficerDetails"]["directorsDetails"] => [
    {
      name: {
        title: "Mr",
        firstName: "",
        lastName: "",
        otherNames: {
          answer: false,
          otherName: "",
        },
      },
      email: "",
      phoneNumber: "",
      dateOfBirth: new Date(),
      birthLocation: {
        country: "Australia",
        state: "Australian Capital Territory",
        city: "",
      },
      taxFileNumber: "",
      homeAddress: "",
      declaredIsAustralianResidentForTaxPurposes: false,
    },
  ];
