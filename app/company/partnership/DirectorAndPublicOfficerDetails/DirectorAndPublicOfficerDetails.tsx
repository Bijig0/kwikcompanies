import { useState } from "react";
import { useFieldArray } from "react-hook-form";
import { useCompanyFormContext } from "../../CompanyFormContext";
import PartnerShipDetailsFormPartLayout from "../../PartnershipDetailsFormPartLayout";
import DirectorDetails from "./DirectorDetails";
import ShareholderDetails from "./ShareholderDetails";
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

  // We need to initialize RHF with a director as default value. This is the same link
  // as the one in CompanyFormContext where we initialize that with an empty director details
  // This initialOrder is just meant to reflect that, albeit in a bit of an ad-hoc and not type safe manner
  const initialOrder = ["director"] as const;

  const [additionOrder, setAdditionOrder] =
    useState<readonly ("director" | "shareholder")[]>(initialOrder);

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

  console.log(directorFieldsManager.fields);

  console.log({ fields });

  return (
    <PartnerShipDetailsFormPartLayout header="Director Details" step={2}>
      {fields.map(({ fieldDetails, type }, index) => {
        return type === "director" ? (
          <DirectorDetails
            key={fieldDetails.id}
            index={index}
            field={fieldDetails}
            handleAddDirector={handleAddDirector}
            handleRemoveDirector={handleRemoveDirector}
          />
        ) : (
          <ShareholderDetails
            key={fieldDetails.id}
            index={index}
            field={fieldDetails}
            handleAddShareholder={handleAddShareholder}
            handleRemoveShareholder={handleRemoveShareholder}
          />
        );
      })}
    </PartnerShipDetailsFormPartLayout>
  );
};

export default DirectorAndPublicOfficerDetails;
