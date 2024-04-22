import transformBusinessCategoryStringToQueryString from "./transformBusinessCategoryStringToQueryString";

describe("transformBusinessCategoryStringToQueryString", () => {
  it("should transform a business category string to a query string", () => {
    const businessCategory = "Selling sauce";
    const queryString =
      transformBusinessCategoryStringToQueryString(businessCategory);
    expect(queryString).toBe("Selling%20sauce");
  });
});
