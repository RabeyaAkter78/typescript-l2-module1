// we cannot redeclare block scope variable, thats why we should wrapped the entire file with a second bracket.

{
    const poorUser = {
        name: "Mr x"
    }

    // Spread Operator:
    // rest Operator:
    // destructuring


    // Spread with array:

    const bros1: string[] = ['Tannu', 'Mannu', 'Jannu'];
    const bros2: string[] = ['mir', 'frozen', 'porota'];

    bros1.push(...bros2);

    // spread with object:

    const mentors1 = {
        typescript: "Mezbaul",
        redux: "azad",
        mongoos: "karim"

    }
    const mentors2 = {
        prisma: "firoz",
        nextjs: "tonmoy",
        cloud: "nahid"
    }

    const mentorsList = {
        ...mentors1,
        ...mentors2
    }

    // rest operator 
    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi ${friend}`))
    };

    greetFriends("Abul", "Babul", "Kabul")


}
