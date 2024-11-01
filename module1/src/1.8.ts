{//Destracturing:

    //Object Destructuring
    //Array Destructuring


    const user = {
        id: 123,

        name: {
            fristName: "Rabeya",
            lastName: "Akter"
        },
        contactNo: "1234567890",
        address: "abcd"
    }

    // name alias: fristName:name

    const { contactNo, name: { fristName: name } } = user;




}