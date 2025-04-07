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

  handleHerbalTea(drug) {
    if (drug.benefit < 50) {
      drug.benefit = drug.benefit + 1;
    }
    if (drug.benefit < 50 && drug.expiresIn < 0) {
      drug.benefit = drug.benefit + 1;
    }
  }

  updateBenefitValue() {
    this.drugs.forEach((drug) => {
      if (drug.name === "Magic Pill") {
        return;
      }
      drug.expiresIn = drug.expiresIn - 1;

      if (drug.name === "Fervex") {
        this.handleFervex(drug);
        return;
      }

      if (drug.name === "Herbal Tea") {
        this.handleHerbalTea(drug);
        return;
      }

      if (drug.benefit > 0) {
        drug.benefit = drug.benefit - 1;
      }

      if (drug.expiresIn < 0 && drug.benefit > 0) {
        drug.benefit = drug.benefit - 1;
      }
    });

    return this.drugs;
  }
}
