const cleanBusinessNameString = (businessCategory: string): string => {
  return businessCategory.trim().replace(/\s+/g, " ");
};

export default cleanBusinessNameString;
