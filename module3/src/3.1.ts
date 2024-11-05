{
    // OOP- class


    class Animal {

        constructor(public name: String, public speices: String, public sound: String) { }
        makeSound() {
            console.log(`the${this.name} says ${this.sound}`);

        }



    }
    const dog = new Animal("dog", "canine", "woof");
    const cat = new Animal("cat", "feline", "meow");
    const bird = new Animal("bird", "avian", "tweet");

    cat.makeSound();
    dog.makeSound();
    bird.makeSound();


}