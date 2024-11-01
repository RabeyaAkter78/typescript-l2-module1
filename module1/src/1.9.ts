{
    // type alias: type k nam dewa


    type Student = {
        name: string;
        age: number,
        address: string,
        contactNumber?: number
    }


    const student1: Student = {
        name: "Rabeya",
        age: 80,
        contactNumber: 123,
        address: "abcs"
    }

    const student2: Student = {
        name: "Mir",
        age: 20,
        address: "dhaka",
    }

    type Username = string
    type IsAdmin = boolean

    const user: Username = "Rabeya"
    const isAdmin: IsAdmin = true

    // function: type alias

    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2;




}