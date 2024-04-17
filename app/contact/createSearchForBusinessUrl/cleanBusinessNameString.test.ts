import cleanBusinessCategoryString from "./cleanBusinessNameString";

describe("cleanBusinessCategoryString", () => {
  it("should remove leading and trailing whitespace", () => {
    const businessCategory = " Acme  ";
    const cleanBusinessCategory = cleanBusinessCategoryString(businessCategory);
    expect(cleanBusinessCategory).toBe("Acme");
  });

  it("should remove multiple whitespace characters", () => {
    const businessCategory = "  Selling sauce  ";
    const cleanBusinessCategory = cleanBusinessCategoryString(businessCategory);
    expect(cleanBusinessCategory).toBe("Selling sauce");
  });
});
