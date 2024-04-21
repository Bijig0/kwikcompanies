import CompanyFormValues from "app/company/companyForm";
import { useFieldArray } from "react-hook-form";
import { DirectorField, ShareholderField } from "./types";

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
  setAdditionOrder: React.Dispatch<
    React.SetStateAction<("director" | "shareholder")[]>
  >;
  additionOrder: readonly ("director" | "shareholder")[];
};

type DirectororPublicOfficerField =
  | { fieldDetails: DirectorField; type: "director" }
  | { fieldDetails: ShareholderField; type: "shareholder" };

type Return = {
  fields: DirectororPublicOfficerField[];
  handleAddDirector: (field: DirectorField) => void;
  handleAddShareholder: (field: ShareholderField) => void;
  handleRemoveDirector: (index: number) => void;
  handleRemoveShareholder: (index: number) => void;
};

const useHandleDirectorOrPublicOfficerDetails = (args: Args): Return => {
  const {
    shareholderFieldsManager,
    directorFieldsManager,
    setAdditionOrder,
    additionOrder,
  } = args;

  const handleAddDirector = (field: DirectorField) => {
    directorFieldsManager.append(field);
    setAdditionOrder((prevOrder) => [...prevOrder, "director"]);
  };

  const handleAddShareholder = (field: ShareholderField) => {
    shareholderFieldsManager.append(field);
    setAdditionOrder((prevOrder) => [...prevOrder, "shareholder"]);
  };

  console.log(directorFieldsManager.fields);

  const interleavedFields: DirectororPublicOfficerField[] = additionOrder.map(
    (type, index) => {
      if (type === "director" && index < directorFieldsManager.fields.length) {
        return {
          fieldDetails: directorFieldsManager.fields[index],
          type: "director",
        };
      } else if (
        type === "shareholder" &&
        index < shareholderFieldsManager.fields.length
      ) {
        return {
          fieldDetails: shareholderFieldsManager.fields[index],
          type: "shareholder",
        };
      }
      throw new Error("Invalid type or out of bounds access"); // handle potential errors
    }
  );

  console.log(interleavedFields);

  const handleRemoveDirector = (index: number) => {
    const id = interleavedFields[index].fieldDetails.id;
    const actualIndex = directorFieldsManager.fields.findIndex(
      (field) => field.id === id
    );
    if (actualIndex > -1) {
      directorFieldsManager.remove(actualIndex);
      setAdditionOrder((order) => order.filter((type, idx) => idx !== index));
    }
  };

  const handleRemoveShareholder = (index: number) => {
    const id = interleavedFields[index].fieldDetails.id;
    const actualIndex = shareholderFieldsManager.fields.findIndex(
      (field) => field.id === id
    );
    if (actualIndex > -1) {
      shareholderFieldsManager.remove(actualIndex);
      setAdditionOrder((order) => order.filter((type, idx) => idx !== index));
    }
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
