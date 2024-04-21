import CompanyFormValues from "app/company/companyForm";
import { useFieldArray } from "react-hook-form";
import {
  AppendDirectorParams,
  AppendShareholderParams,
  DirectorField,
  RemoveDirectorParams,
  RemoveShareholderParams,
  ShareholderField,
} from "./types";

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
  handleAddDirector: (field: AppendDirectorParams) => void;
  handleAddShareholder: (field: AppendShareholderParams) => void;
  handleRemoveDirector: (index: RemoveDirectorParams) => void;
  handleRemoveShareholder: (index: RemoveShareholderParams) => void;
};

const useHandleDirectorOrPublicOfficerDetails = (args: Args): Return => {
  const {
    shareholderFieldsManager,
    directorFieldsManager,
    setAdditionOrder,
    additionOrder,
  } = args;

  const handleAddDirector = (field: AppendDirectorParams) => {
    directorFieldsManager.append(field);
    setAdditionOrder((prevOrder) => [...prevOrder, "director"]);
  };

  const handleAddShareholder = (field: ShareholderField) => {
    shareholderFieldsManager.append(field);
    setAdditionOrder((prevOrder) => [...prevOrder, "shareholder"]);
  };

  console.log(directorFieldsManager.fields);
  console.log(directorFieldsManager.fields.length);
  console.log(shareholderFieldsManager.fields);
  console.log(shareholderFieldsManager.fields.length);
  console.log(additionOrder);

  const directorFieldsCopy = [...directorFieldsManager.fields];
  const shareholderFieldsCopy = [...shareholderFieldsManager.fields];

  const interleavedFields = additionOrder.map((type) => {
    if (type === "director") {
      const fieldDetails = directorFieldsCopy.shift();
      return { fieldDetails, type };
    } else {
      const fieldDetails = shareholderFieldsCopy.shift();
      return { fieldDetails, type };
    }
  });

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
