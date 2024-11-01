
{ }
//Function:


// normal function:
// Arrow Function:

function add(num1: number, num2: number = 10): number {
    return num1 + num2;
}

add(2, 2)
// arrow function:
const addArrow = (num1: number, num2: number): number => num1 + num2

// Method: when a function is written into an object is called a method: 

// object-->function = method.

// Number
const poorUser = {
    name: "Rabeya",
    balance: 0,
    addBlance(balance: number): number {
        return this.balance + balance;
    }
}
// string:
const poorUser2 = {
    name: "Rabeya",
    balance: 0,
    addBlance(balance: number): string {
        return `My New Balance is : ${this.balance + balance}`;
    }
}


// map: Squire:
const arr: number[] = [1, 2, 3];
const newArray: number[] = arr.map((elemnt: number): number => elemnt * elemnt);
console.log(newArray)