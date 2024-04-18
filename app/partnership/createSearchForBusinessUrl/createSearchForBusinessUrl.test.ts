import createSearchForBusinessUrl from "./createSearchForBusinessUrl";

describe("createSearchForBusinessUrl", () => {
  it("should create a search URL for a business name", () => {
    const businessName = "Acme ABC";
    const url = createSearchForBusinessUrl(businessName);
    expect(url).toBe(
      "https://apx.honcho.com.au/37.0.0/asic/company/search/by-name/companyName%3DAcme%20ABC"
    );
  });
});
