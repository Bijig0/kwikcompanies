import cleanBusinessCategoryString from "./cleanBusinessNameString";

const transformBusinessNameStringToQueryString = (
  businessCategory: string
): string => {
  const cleanBusinessCategory = cleanBusinessCategoryString(businessCategory);
  return cleanBusinessCategory.split(" ").join("%20");
};

export default transformBusinessNameStringToQueryString;
