import cleanBusinessCategoryString from "./cleanBusinessCategoryString";

describe("cleanBusinessCategoryString", () => {
  it("should remove leading and trailing whitespace", () => {
    const businessCategory = " Selling sauce ";
    const cleanBusinessCategory = cleanBusinessCategoryString(businessCategory);
    expect(cleanBusinessCategory).toBe("Selling sauce");
  });

  it("should remove multiple whitespace characters", () => {
    const businessCategory = "  Selling sauce  ";
    const cleanBusinessCategory = cleanBusinessCategoryString(businessCategory);
    expect(cleanBusinessCategory).toBe("Selling sauce");
  });
});
