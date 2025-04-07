///TODO : create classes specific for each drug and a factory to handle the creation of drugs
// in order to make this code even more maintainable
export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  /// Handle the specifics of Fervex
  handleFervex(drug) {
    if (drug.benefit < 50) {
      drug.benefit = drug.benefit + 1;
      if (drug.expiresIn < 10 && drug.benefit < 50) {
        drug.benefit = drug.benefit + 1;
      }
      if (drug.expiresIn < 5 && drug.benefit < 50) {
        drug.benefit = drug.benefit + 1;
      }
    }

    if (drug.expiresIn < 0) {
      drug.benefit = 0;
    }
  }

  /// Handle the specifics of the Herbal tea
  handleHerbalTea(drug) {
    if (drug.benefit < 50) {
      drug.benefit = drug.benefit + 1;
    }
    if (drug.benefit < 50 && drug.expiresIn < 0) {
      drug.benefit = drug.benefit + 1;
    }
  }

  /// Default handler for all drugs
  handleDefaultDrug(drug, benefitDecreaseFactor) {
    if (drug.benefit > 0) {
      drug.benefit = drug.benefit - benefitDecreaseFactor;
    }

    if (drug.expiresIn < 0 && drug.benefit > 0) {
      drug.benefit = drug.benefit - benefitDecreaseFactor;
    }
  }

  updateBenefitValue() {
    this.drugs.forEach((drug) => {
      if (drug.name === "Magic Pill") {
        return;
      }

      drug.expiresIn = drug.expiresIn - 1;

      switch (drug.name) {
        case "Fervex":
          this.handleFervex(drug);
          break;
        case "Herbal Tea":
          this.handleHerbalTea(drug);
          break;
        case "Dafalgan":
          this.handleDefaultDrug(drug, 2);
          break;
        default:
          this.handleDefaultDrug(drug, 1);
          break;
      }
    });

    return this.drugs;
  }
}
