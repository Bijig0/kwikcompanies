import { Button } from "react-bootstrap";
import { ImCross } from "react-icons/im";

type Props = {
  nameSuggestions: string[];
  resetSearch: () => void;
};
const IdenticalText = (props: Props) => {
  const { nameSuggestions, resetSearch } = props;
  return (
    <div>
      <div className="flex items-center justify-start gap-2">
        <ImCross width={20} height={20} className="text-red-600" />
        <p className="p-0 m-0 text-lg font-semibold text-red-600">
          Sorry, this business name is not available
        </p>
      </div>
      <div className="my-2" />
      <p className="text-sm">
        Try searching again for a different name or add a word to make this name
        unique.
      </p>
      <div className="flex items-center justify-start gap-3">
        <Button onClick={resetSearch} className="bg-gray-300">
          Clear and search again
        </Button>
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
