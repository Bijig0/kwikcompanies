//search.easycompanies.com/abn-activities?activity=Selling%20sauce&v=2

const createBusinessCategoryFinderURL = (businessCategory: string): URL => {
  const baseURL = "https://search.easycompanies.com/abn-activities";

  const url = new URL(baseURL);
  const decodedBusinessCategory = decodeURIComponent(businessCategory);
  const encodedBusinessCategory = encodeURIComponent(decodedBusinessCategory);
  url.searchParams.set("activity", encodedBusinessCategory);
  url.searchParams.set("v", "2");

  return url;
};

// if (require.main === module) {
//   const businessCategory = "Selling sauce";

//   const url = createBusinessCategoryFinderURL(businessCategory);
//   console.log(url.href);
// }
