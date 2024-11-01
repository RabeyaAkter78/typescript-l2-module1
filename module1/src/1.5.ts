// Reference Types: --> Object:

const user: {
    company: "Programming Hero"; //type--> literal types: cannot change
    readonly company2?: string; // fixed, readonly data cannot be modified.
    fristName: string;
    middleName?: string //optional type
    lastName: string;
    isMarried: boolean;
} = {
    company: "Programming Hero",
    fristName: "Rabeya",
    lastName: "Akter",
    isMarried: false,
}