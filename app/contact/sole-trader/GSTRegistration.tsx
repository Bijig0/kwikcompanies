const GSTRegistration = () => {
  return (
    <>
      <label htmlFor="message">Will you register for GST?</label>
      <div className="flex flex-col">
        {["Yes ($49)", "No"].map((option) => (
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
    </>
  );
};

export default GSTRegistration;
