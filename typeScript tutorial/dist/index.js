let x = 10.888;
console.log(Math.round(x));
let y;
y = "a";
let bool = true;
console.log(bool);
const arr = [1, 2, 3, 4, 5];
console.log(arr);
const student = {
    id: "12-393",
    name: "meow",
    age: 30,
};
let noVal = null;
let user = [1, "meow"];
let anyType;
anyType = 10;
anyType = "meow";
console.log(anyType.toUpperCase());
let unknownType;
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
function sum(a, b) {
    return a + b;
}
const arrowFunc = (a, b) => {
    return a + b;
};
function sub(a, b) {
    if (typeof b === "number")
        return a - b;
    else
        return a;
}
console.log(sub(10, 30));
let person = {
    id: "e233",
    sayHi: () => {
        return "hi";
    },
};
console.log(person === null || person === void 0 ? void 0 : person.name);
let aa = 10;
aa = "meow";
aa = true;
let hulk = {
    humanAttribute: true,
    superHumanAttribute: true,
};
function getApi(a) {
    if (typeof a === "number") {
        return a;
    }
    else {
        return a;
    }
}
var Days;
(function (Days) {
    Days[Days["saturday"] = 1] = "saturday";
    Days[Days["sunday"] = 2] = "sunday";
    Days[Days["monday"] = 3] = "monday";
    Days[Days["wednesday"] = 4] = "wednesday";
    Days[Days["thursday"] = 5] = "thursday";
    Days[Days["friday"] = 6] = "friday";
})(Days || (Days = {}));
console.log("the day is " + Days.wednesday);
export {};
//# sourceMappingURL=index.js.map