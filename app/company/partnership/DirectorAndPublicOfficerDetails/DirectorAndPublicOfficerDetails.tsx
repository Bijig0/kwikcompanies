import { titles } from "app/contact/soleTraderForm";
import countries from "app/types/countries";
import { Button } from "react-bootstrap";
import { Controller, useFieldArray } from "react-hook-form";
import PartnershipFormProvider, {
  useCompanyFormContext,
} from "../../CompanyFormContext";
import PartnerShipDetailsFormPartLayout from "../../PartnershipDetailsFormPartLayout";
import { australianStates } from "../../companyForm";
import useHandleDirectorOrPublicOfficerDetails from "./useHandleDirectorOrPublicOfficerDetails";



const DirectorAndPublicOfficerDetails = () => {
  const {
    formManager: {
      register,
      watch,
      control,
      formState: { errors },
    },
  } = useCompanyFormContext();
  const directorFieldsManager = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormProvider)
    name: "directorAndPublicOfficerDetails.directorsDetails", // unique name for your Field Array
  });

  const shareholderFieldsManager = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormProvider)
    name: "directorAndPublicOfficerDetails.shareholdersDetails", // unique name for your Field Array
  });

  const {
    fields,
    handleAddDirector,
    handleAddShareholder,
    handleRemoveDirector,
    handleRemoveShareholder,
  } = useHandleDirectorOrPublicOfficerDetails({
    directorFieldsManager,
    shareholderFieldsManager,
  });

  return (
    <PartnerShipDetailsFormPartLayout header="Director Details" step={2}>
      {directorFields.map((field, index) => {
        const isLastField = directorFields.length === index + 1;
        return 
      })}
    </PartnerShipDetailsFormPartLayout>
  );
};

export default DirectorAndPublicOfficerDetails;
