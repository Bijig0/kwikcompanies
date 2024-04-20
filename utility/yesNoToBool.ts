const yesNoToBool = (value: "Yes" | "No") => {
  if (value === "Yes") {
    return true;
  } else if (value === "No") {
    return false;
  }
};

export default yesNoToBool;
