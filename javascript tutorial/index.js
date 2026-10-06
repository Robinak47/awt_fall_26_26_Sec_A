console.log("hello world");

var name = "Mr. Meow";
console.log(name);

let age = 30;
console.log(age);

const pi = 3.1416;
console.log(pi);

//function in js

function greet() {
    return "hello";

}

const arrowGreet = name => "hello from arrow function " + name;


console.log(greet());

const fun = function () {
    return "meow";
}

const callMe = () => "meow";

console.log(fun());

function sum(a, b) {
    return a + b;
}

const sumation = (a, b) => a + b;

console.log(sum(10, 20));

const add = function (a, b) {
    return a + b;
}

const withdraw = ammount => {
    let bal = 3000;
    if ((bal - ammount) > 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(add(10, 20));
console.log(arrowGreet("meow"));
console.log(callMe());
console.log(sumation(200, 400));
let withdrawStatus = withdraw(2000);
if (withdrawStatus) {
    console.log("successful");
}
else {
    console.log("failed");
}

const student = {
    id: "23-4893",
    name: "mr. meow",
    cgpa: 4.00,
    getName: function () {
        const objName = () => {
            return this.name;
        }

        return objName();
    }



}

student.dept = "cse";
console.log(student.id);
console.log(student.name);
console.log(student.cgpa);
console.log(student.dept);



console.log(student["id"]);
console.log(student.getName());


//array in js

const numArr = [1, 2, 3, 4, 5];

console.log(numArr);

numArr.forEach(element => {
    console.log(element);
})

const newArr = numArr.map(element => element + 5);
console.log(newArr);

const filteredArray = numArr.filter(element => element > 2);
console.log(filteredArray);

const convValue = numArr.reduce((sum, element) => { return sum + element }, 0)

console.log(convValue);

console.log(numArr.some(element => element > 4));
console.log(numArr.every(element => element > 0));

//array destructuring
const arr2 = [10, 20, 30, 40];

const [val1, val2, val3, val4] = arr2;
console.log(val1, val2, val3, val4);

//object destructuring

const person = {
    name: "mr. meow",
    age: 20,
    money: 10,
    address: {
        city: "Dhaka",
        country: "Bangladesh",
    }
}

const { name: firstName, age: actualAge, money: actualMoney, address: { city, country } } = person;
console.log(firstName);
console.log(actualAge);
console.log(actualMoney);
console.log(city);
console.log(country);

//spread

let valueArray = [10, 20, 30, 40, 50]
function sub(a, b, c, d, e) {
    return a - b - c - d - e;
}

console.log(sub(...valueArray));

// const newValueArray = valueArray;
// valueArray.push(3000);
// console.log(newValueArray);


const newValueArray = [...valueArray];
valueArray.push(3000);
console.log(newValueArray);


//rest op

const [v1, v2, ...rest] = valueArray;
console.log(v1, v2, rest);


function multiplication(...numbers) {
    let mul = 1;
    for (let i of numbers) {
        mul = mul * i;
    }

    return mul;
}


console.log(multiplication(10, 20, 30, 40, 50));


//asyncronous Javascript


//this is syncronous operation
console.log("A");
console.log("B");
console.log("C");


//asyncronous operation
// console.log("A");
// setTimeout(() => {
//     console.log("B");
// }, 5000);
// console.log("C");


// const intervalId = setInterval(() => {
//     console.log("hello");
// }, 2000);

// setTimeout(() => {
//     clearInterval(intervalId);
// }, 12000)



//promise

const stimulator = true;
function getData() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (stimulator) {
                resolve("success");
            }

            else {
                reject("error");
            }
        }, 2000)
    })
}


getData().then(resolveMsg => {
    console.log(resolveMsg);
}).catch(error => {
    console.log(error);
}).finally(() => {
    console.log("thank you buddy!");
})



async function getUserData() {

    return new Promise((resolve, reject) => {

        let flag = false;
        if (flag) {
            resolve({ id: 30 });
        }
        else {
            reject("permission denied");
        }
    })

}

async function getResult(id) {
    return new Promise((resolve, reject) => {
        let userResult = [{ id: 30, result: "pass" }, { id: 2, result: "fail" }];

        for (let i of userResult) {
            if (i.id === id) {
                resolve({ result: i.result });
            }
        }

        reject("user not found");



    })
}

async function execution() {
    try {
        let userData = await getUserData();
        let resultData = await getResult(userData.id);
        console.log(resultData.result);

    }
    catch (message) {
        console.log(message);
    }
}

execution();