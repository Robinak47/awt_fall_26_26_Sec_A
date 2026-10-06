let x = 10.888;
console.log(Math.round(x));

let y: string;
y = "a";

let bool: boolean = true;
console.log(bool);

const arr: number[] = [1, 2, 3, 4, 5];
console.log(arr);

type Student = {
  id: string;
  name: string;
  age: number;
};

const student: Student = {
  id: "12-393",
  name: "meow",
  age: 30,
};

let noVal: null = null;

let user: [number, string] = [1, "meow"];

let anyType: any;
anyType = 10;
anyType = "meow";

console.log(anyType.toUpperCase());

let unknownType: unknown;
unknownType = 10;
unknownType = "meow";

if (typeof unknownType === "string") {
  console.log(unknownType.toUpperCase());
}

// function infiteLoop(): never {
//   let i = 10;
//   while (true) {
//     console.log(i);
//     i = i + 10;
//   }
// }

// console.log(infiteLoop());

function sum(a: number, b: number): number {
  return a + b;
}

const arrowFunc = (a: number, b: number): number => {
  return a + b;
};

function sub(a: number, b?: number): number {
  if (typeof b === "number") return a - b;
  else return a;
}

console.log(sub(10, 30));

type Person = {
  id: string;
  name?: string;
  sayHi(): string;
};

let person: Person = {
  id: "e233",
  sayHi: (): string => {
    return "hi";
  },
};

console.log(person?.name);

let aa: number | string | boolean = 10;
aa = "meow";
aa = true;

type human = {
  humanAttribute: boolean;
};

type superHuman = {
  superHumanAttribute: boolean;
};

type avenger = human & superHuman;

let hulk: avenger = {
  humanAttribute: true,
  superHumanAttribute: true,
};

function getApi(a: number | string): number | string {
  if (typeof a === "number") {
    return a;
  } else {
    return a;
  }
}

enum Days {
  saturday = 1,
  sunday,
  monday,
  wednesday,
  thursday,
  friday,
}

console.log("the day is " + Days.wednesday);
