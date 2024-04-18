import TextInput from "app/contact/TextInput";

const BusinessNameRegistrationDetails = () => {
  return (
    <div>
      <div className="flex-[3_3_0%] md:flex-[2_2_0%]">
        <label htmlFor="message">First Name</label>
        <TextInput placeholder="John" name="firstName" />
      </div>
      <div className="flex-[3_3_0%] md:flex-[2_2_0%]">
        <label htmlFor="message">Last Name</label>
        <TextInput placeholder="Smith" name="lastName" />
      </div>
    </div>
  );
};

export default BusinessNameRegistrationDetails;
