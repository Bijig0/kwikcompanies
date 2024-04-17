import transformBusinessNameStringToQueryString from "./transformBusinessNameStringToQueryString";

https: const createSearchForBusinessUrl = (businessName: string): string => {
  const transformedBusinessCategory =
    transformBusinessNameStringToQueryString(businessName);

  const constructedURL = `apx.honcho.com.au/37.0.0/asic/company/search/by-name/companyName%3D${transformedBusinessCategory}`;

  return constructedURL;
};

export default createSearchForBusinessUrl;
