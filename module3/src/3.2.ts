{
    // Inheritance:

    class Parent {
        name: String;
        age: number;
        addres: String;

        constructor(name: string, age: number, addres: string) {
            this.name = name;
            this.age = age;
            this.addres = addres;
        }
        getSleep(numberOfHoues: number) {
            console.log(`${this.name} is sleeping ${numberOfHoues} hours per day`);

        }
    }




    class Student extends Parent {
        constructor(name: string, age: number, addres: string) { super(name, age, addres) }

    };
    const Student1 = new Student("Rabeya", 20, "dhaka");
    class Teacher extends Parent {
        designation: String
        constructor(name: string, age: number, addres: string, designation: string) {
            super(name, age, addres);
            this.designation = designation;
        }
        takeClass(numOfClass: number) {
            console.log(`${this.name}will take ${numOfClass} class`);
        }
    }
    const teacher = new Teacher("Mr Teacher", 40, "dhaka", "professor");




}