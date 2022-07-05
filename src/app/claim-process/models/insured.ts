export class Insured {
    address: {
        cityName: string;
        streetName: string;
    };
    identityType: number;
    age: number;
    lastName: string;
    identity: number;
    firstName: string;

    /**
     *
     */
    constructor() {
        this.address = { cityName: "", streetName: "" };
        this.identityType = 0;
        this.age = 0;
        this.lastName = "";
        this.identity = 0;
        this.firstName = "";

    }
}