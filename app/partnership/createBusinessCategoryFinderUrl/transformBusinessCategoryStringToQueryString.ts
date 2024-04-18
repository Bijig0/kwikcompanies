import cleanBusinessCategoryString from "./cleanBusinessCategoryString";

const transformBusinessCategoryStringToQueryString = (
  businessCategory: string
): string => {
  const cleanBusinessCategory = cleanBusinessCategoryString(businessCategory);
  return cleanBusinessCategory.split(" ").join("%20");
};

export default transformBusinessCategoryStringToQueryString;
