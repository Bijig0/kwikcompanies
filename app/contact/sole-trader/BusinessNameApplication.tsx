const BusinessNameApplication = () => {
  return (
    <div>
      <h5>Business Name Application</h5>
      <p>Step 3 of 8</p>
      <label className="font-semibold text-black text-md" htmlFor="name">
        Will you trade under a business name?
      </label>
      <div className="flex flex-col">
        {[
          "Yes, the business name I need is...",
          "No I will trade under my full name",
        ].map((option) => (
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name={option}
              value={option}
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default BusinessNameApplication;
