import { Cat } from "./cat";

export class PersianCat extends Cat {
  constructor(
    numberOfLegs: number,
    color: string,
    private breed: string,
  ) {
    super(numberOfLegs, color);
    this.breed = breed;
  }

  set Breed(breed: string) {
    this.breed = breed;
  }

  get Breed(): string {
    return this.breed;
  }

  doMeowMeow(): void {
    console.log("meow meow");
  }

  override showDetails(): void {
    super.showDetails();
    console.log(` The breed is ${this.breed}`);
  }

  doJump(): void {
    console.log("jumping");
  }
}
