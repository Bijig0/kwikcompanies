import { useFormContext } from "react-hook-form";
import FormPartLayout from "./FormPartLayout";
import { structures } from "./chooseStructureForm";
const ChooseStructure = () => {
  const { register, control } = useFormContext();
  return (
    <FormPartLayout header="Choose a structure" step={1}>
      <label className="font-semibold text-black text-md" htmlFor="message">
        I am registering as a
      </label>
      <div className="flex flex-col">
        {structures.map((option) => (
          <label key={option} className="inline-flex items-center">
            <input
              {...register("structure", {
                required: "You must choose a structure",
              })}
              type="radio"
              className="w-3.5 h-3.5 p-0"
              value={option}
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
      {/* <RadioButtonGroup
        label="Basic"
        name="basic"
        control={control}
        
        options={[
          {
            id: "1",
            label: "Label 1",
          },
          {
            id: "2",
            label: "label 2",
          },
        ]}
      /> */}
    </FormPartLayout>
  );
};

export default ChooseStructure;
