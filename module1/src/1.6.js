{ }
//Function:
// normal function:
// Arrow Function:
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
add(2, 2);
// arrow function:
var addArrow = function (num1, num2) { return num1 + num2; };
// Method: when a function is written into an object is called a method: 
// object-->function = method.
// Number
var poorUser = {
    name: "Rabeya",
    balance: 0,
    addBlance: function (balance) {
        return this.balance + balance;
    }
};
// string:
var poorUser2 = {
    name: "Rabeya",
    balance: 0,
    addBlance: function (balance) {
        return "My New Balance is : ".concat(this.balance + balance);
    }
};
// map: Squire:
var arr = [1, 2, 3];
var newArray = arr.map(function (elemnt) { return elemnt * elemnt; });
console.log(newArray);
