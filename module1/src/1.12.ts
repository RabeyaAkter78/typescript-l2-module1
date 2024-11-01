{
    //never
    // unknown : 
    // nullable type : kno ekta variable er type jopdi null hoy tobe seta nullable type.


    const searchName = (value: string | null) => {
        if (value) {
            console.log("searching")

        } else {
            console.log("Nothing to Search")
        }
    }

    // searchName("RAbeya")
    searchName(null)

    //  Unknown types: run time e type nirdharon korbe, like typeof()


    const getSpeedInMeeterPerSec = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = value * 1000 / 3600;
            console.log("convertedSpeed:", convertedSpeed)
        }
        else if (typeof value === "string") {
            const [result, unit] = value.split(' ');
            const convertedSpeed = parseFloat(result) * 1000 / 3600;
            console.log("convertedSpeed:", convertedSpeed)

        } else {
            console.log("Input Right Value")
        }


    };

    // getSpeedInMeeterPerSec(1000)
    // getSpeedInMeeterPerSec("1000")
    getSpeedInMeeterPerSec(null)

    // never type: custom error handle :eta kkno kichu type return korbe na


    const throwError = (msg: string): never => {
        throw new Error(msg);

    };
    throwError("Life is full oif Error");


}