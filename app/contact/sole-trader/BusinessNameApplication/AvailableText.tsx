import { Button } from "react-bootstrap";
import { CiCircleCheck } from "react-icons/ci";

const AvailableText = () => {
  return (
    <>
      <div className="flex justify-start items-center gap-2">
        <CiCircleCheck width={20} height={20} className="text-green-700" />
        <p className="text-lg font-semibold text-green-700 p-0 m-0">
          Congratulations! This business name is available!
        </p>
      </div>
      <div className="my-2" />
      <p className="text-sm">
        The business name above is still available and you <br /> may secure it
        now from just $99 per year.
      </p>
      <div className="flex justify-start items-center gap-3">
        <Button>Secure this name now!</Button>
        <Button className="bg-gray-300 border-gray-300 text-black">
          Clear and search again
        </Button>
      </div>
    </>
  );
};

export default AvailableText;
