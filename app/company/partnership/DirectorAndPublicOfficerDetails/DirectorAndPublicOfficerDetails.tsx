import { zip } from "radash";
import { useState } from "react";
import { useFieldArray } from "react-hook-form";
import { useCompanyFormContext } from "../../CompanyFormContext";
import PartnerShipDetailsFormPartLayout from "../../PartnershipDetailsFormPartLayout";
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

  const [additionOrder, setAdditionOrder] = useState<
    ("director" | "shareholder")[]
  >([]);

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
    additionOrder,
    setAdditionOrder,
  });

  return (
    <PartnerShipDetailsFormPartLayout header="Director Details" step={2}>
      {zip(fields, additionOrder).map(([field, type], index) => {
        return type;
      })}
    </PartnerShipDetailsFormPartLayout>
  );
};

export default DirectorAndPublicOfficerDetails;
