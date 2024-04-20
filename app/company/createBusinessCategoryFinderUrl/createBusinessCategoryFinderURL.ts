import transformBusinessCategoryStringToQueryString from "./transformBusinessCategoryStringToQueryString";

const createBusinessCategoryFinderURL = (businessCategory: string): string => {
  const transformedBusinessCategory =
    transformBusinessCategoryStringToQueryString(businessCategory);

  const constructedURL = `https://search.easycompanies.com/abn-activities?activity=${transformedBusinessCategory}&v=2`;

  return constructedURL;
};

export default createBusinessCategoryFinderURL;

console.log(createBusinessCategoryFinderURL("Selling sauce"));
