{
    // tarnary operator:?
    // optional chaining:?
    // nullish  qualishing operator:?

    // ts node dev : npm i ts-node-dev --save-dev

    const age: number = 19;
    // With Statement:
    // if (age >= 18) {
    //     console.log("Adult")

    // } else {
    //     console.log("Not Adult")
    // }


    // with tarnary:
    // const isAdult = age >= 18 ? "Adult" : "Not Adult";
    // console.log({ isAdult })

    // with nullish Qualising operator:null /undefined --.decision making: nuu/ undefined bade ja inputr deaw hobe ta e return korbe, falsy value accept korena.

    // const isAuthinticated = undefined;
    // const result1 = isAuthinticated ?? "Guest";
    // console.log({ result1 })



    // optional Chaining:


    type User = {
        name: string,
        age: number,
        contactNo: number,

        address: {
            city: string,
            roadNo: number,
            parmanentAddress?: string,
            presentAddress: string,
        }
    }

    const user: User = {
        name: "Rabeya",
        age: 80,
        contactNo: 12354,
        address: {
            city: "Bagerhat",
            roadNo: 4,
            presentAddress: "bonosree"

        }
    }

    const parmanentAddress = user?.address?.parmanentAddress ?? "No Address provided";
    console.log(parmanentAddress)







}