type Props = {
  value: string;
};

const TextInput = (props: Props) => {
  return (
    <input
      type="text"
      id="name"
      name="name"
      className="rounded-md text-gray-800 bg-white py-3 border-gray-300 w-full font-medium px-4 rounded-lg w-full text-base font-normal leading-normal bg-white border border-gray-300 appearance-none rounded transition-colors transition-shadow"
      defaultValue=""
      placeholder="Somaia D. Silva"
      required={false}
      data-error="Please enter your Name"
    />
  );
};

export default TextInput;
