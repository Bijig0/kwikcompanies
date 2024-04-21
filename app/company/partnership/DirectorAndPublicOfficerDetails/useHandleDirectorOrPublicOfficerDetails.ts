import CompanyFormValues from "app/company/companyForm";
import { useState } from "react";
import { useFieldArray } from "react-hook-form";

type Args = {
  shareholderFieldsManager: ReturnType<
    typeof useFieldArray<
      CompanyFormValues,
      "directorAndPublicOfficerDetails.shareholdersDetails",
      "id"
    >
  >;
  directorFieldsManager: ReturnType<
    typeof useFieldArray<
      CompanyFormValues,
      "directorAndPublicOfficerDetails.directorsDetails",
      "id"
    >
  >;
};

const useHandleDirectorOrPublicOfficerDetails = (args: Args) => {
  const { shareholderFieldsManager, directorFieldsManager } = args;
  const {
    fields: directorFields,
    append: appendDirector,
    remove: removeDirector,
  } = directorFieldsManager;
  const {
    fields: shareholderFields,
    append: appendShareholder,
    remove: removeShareholder,
  } = shareholderFieldsManager;
  const [additionOrder, setAdditionOrder] = useState<
    ("director" | "shareholder")[]
  >([]);

  // Function to handle adding director
  const handleAddDirector = (field: typeof directorFields) => {
    appendDirector(field); // Assuming the director object is empty initially
    setAdditionOrder([...additionOrder, "director"]);
  };

  // Function to handle adding shareholder
  const handleAddShareholder = (field: typeof shareholderFields) => {
    appendShareholder(field); // Assuming the shareholder object is empty initially
    setAdditionOrder([...additionOrder, "shareholder"]);
  };

  const interleavedFields = additionOrder.map((type) => {
    if (type === "director") {
      return directorFieldsManager.fields.shift();
    } else {
      return shareholderFieldsManager.fields.shift();
    }
  });

  const handleRemoveDirector = (index: number) => {
    // Find the actual index in the original directors array
    const actualIndex = directorFields.findIndex(
      (field) => field.id === interleavedFields[index].id
    );

    if (actualIndex <= -1) throw new Error("Director not found");

    removeDirector(actualIndex);
    // Update the additionOrder to remove the corresponding entry
    const updatedOrder = additionOrder.filter(
      (type, idx) =>
        !(type === "director" && directorFields[actualIndex] && idx === index)
    );
    setAdditionOrder(updatedOrder);
  };

  const handleRemoveShareholder = (index: number) => {
    // Find the actual index in the original shareholders array
    const actualIndex = shareholderFields.findIndex(
      (field) => field.id === interleavedFields[index].id
    );
    if (actualIndex <= -1) throw new Error("Shareholder not found");
    removeShareholder(actualIndex);
    // Update the additionOrder to remove the corresponding entry
    const updatedOrder = additionOrder.filter(
      (type, idx) =>
        !(
          type === "shareholder" &&
          shareholderFields[actualIndex] &&
          idx === index
        )
    );
    setAdditionOrder(updatedOrder);
  };

  return {
    fields: interleavedFields,
    handleAddDirector,
    handleAddShareholder,
    handleRemoveDirector,
    handleRemoveShareholder,
  };
};

export default useHandleDirectorOrPublicOfficerDetails;
