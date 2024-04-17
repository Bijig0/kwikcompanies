import cleanBusinessCategoryString from "./cleanBusinessNameString";

describe("cleanBusinessCategoryString", () => {
  it("should remove leading and trailing whitespace", () => {
    const businessCategory = " Acme  ";
    const cleanBusinessCategory = cleanBusinessCategoryString(businessCategory);
    expect(cleanBusinessCategory).toBe("Acme");
  });

  it("should remove multiple whitespace characters", () => {
    const businessCategory = " My     Company";
    const cleanBusinessCategory = cleanBusinessCategoryString(businessCategory);
    expect(cleanBusinessCategory).toBe("My Company");
  });
});
