import PartnerShipFormValues from "./partnershipForm";

export const createEmptyPartnerDetails =
  (): PartnerShipFormValues["partnerDetails"][number] => ({
    partnerType: "Individual",
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
  });
