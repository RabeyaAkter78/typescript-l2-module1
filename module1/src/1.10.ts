{

    // union types: hoy eta hobe noy ota hobe.
    // string literal type:


    // type FrontendDeveloper = 'fakibazdeeveloper' | 'juniorDeveloper'
    // const newDeveloper: FrontendDeveloper = 'juniorDeveloper'
    // type User = {
    //     name: string;
    //     email?: string,
    //     gender: "male" | "female",
    //     bloodGroup: "O+" | "A+",
    // }
    // const user: User = {
    //     name: "RAbeya",
    //     gender: "female",
    //     bloodGroup: "O+"
    // }

    // Intersection Type: combine korbe: sobgula thakte hobe.

    type FrontendDeveloper = {
        skills: string[];
        designation1: 'Frontend Developer'
    }
    type BabulackendDeveloper = {
        skills: string[];
        designation2: 'Backend Developer'
    }


    type FullstackDeveloper = FrontendDeveloper & BabulackendDeveloper
    const fullstackDeveloper: FullstackDeveloper = {
        skills: ['HTML', 'css', 'js'],
        designation1: "Frontend Developer",
        designation2: "Backend Developer"
    }







    

}