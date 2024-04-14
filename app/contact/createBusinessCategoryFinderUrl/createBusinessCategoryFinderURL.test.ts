import createBusinessCategoryFinderURL from "./createBusinessCategoryFinderURL";

describe("createBusinessCategoryFinderURL", () => {
  it("should return a URL with the correct search parameters", () => {
    const businessCategory = "Selling sauce";

    const url = createBusinessCategoryFinderURL(businessCategory);

    expect(url).toBe(
      "https://search.easycompanies.com/abn-activities?activity=Selling%20sauce&v=2"
    );
  });
});
