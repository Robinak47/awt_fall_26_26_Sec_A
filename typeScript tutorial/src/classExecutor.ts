import { Cat } from "./cat";
import { PersianCat } from "./PersianCat";

// let cat: Cat = new Cat(4, "Burgundy");

// cat.Color = "Graciar Blue";
// cat.NumberOfLegs = 40;

// console.log(cat.Color);
// console.log(cat.NumberOfLegs);

// cat.showDetails();

let persianCat: PersianCat = new PersianCat(4, "MidNight Black", "African");

persianCat.NumberOfLegs = 8;
persianCat.Color = "Cosmic Orange";
persianCat.Breed = "Iranian";

persianCat.showDetails();
persianCat.doMeowMeow();
