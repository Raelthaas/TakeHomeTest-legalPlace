import { Pharmacy, Drug } from "../pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should not change Magic Pill Value", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 2, 3)]);
  });
});

describe("Pharmacy - Herbal Tea", () => {
  it("should increase benefits and reduce expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 4)]);
  });
  it("should increase benefits x2 and reduce expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 5)]);
  });
});
