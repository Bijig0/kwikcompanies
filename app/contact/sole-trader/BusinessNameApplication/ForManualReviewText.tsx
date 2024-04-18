import { Button } from "react-bootstrap";

const ForManualReviewText = () => {
  return (
    <>
      <div className="flex justify-start items-center gap-2">
        <p className="text-lg font-semibold text-green-700 p-0 m-0">
          Your name may be available. Secure it before someone else does.
        </p>
      </div>
      <div className="my-2" />
      <p className="text-sm">
        This business name will be reviewed by our specialist team before final
        registration.
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

export default ForManualReviewText;
