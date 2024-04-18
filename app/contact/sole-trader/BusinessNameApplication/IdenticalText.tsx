import { Button } from "react-bootstrap";
import { ImCross } from "react-icons/im";

type Props = {
  nameSuggestions: string[];
};
const IdenticalText = (props: Props) => {
  const { nameSuggestions } = props;
  return (
    <div>
      <div className="flex justify-start items-center gap-2">
        <ImCross width={20} height={20} className="text-red-600" />
        <p className="text-lg font-semibold text-red-600 p-0 m-0">
          Sorry, this business name is not available
        </p>
      </div>
      <div className="my-2" />
      <p className="text-sm">
        Try searching again for a different name or add a word to make this name
        unique.
      </p>
      <div className="flex justify-start items-center gap-3">
        <Button className="bg-gray-300">Clear and search again</Button>
      </div>
      {nameSuggestions.length > 0 && (
        <div>
          <p className="text-lg font-semibold">
            Available business name suggestions
          </p>
          <ul>
            {nameSuggestions.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default IdenticalText;
