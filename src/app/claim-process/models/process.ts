import { ContactPerson } from "./contactPerson";
import { Insured } from "./insured";
import { IProcess } from "./iprocess.interface";
import { KeyValue } from "./keyValue";
import { SuperClaim } from "./super-claim";

export class Process implements IProcess {

    superClaim: SuperClaim;
    insured: Insured;
    contactPersons: ContactPerson[];

    /**
     *
     */
    constructor() {
        this.superClaim = {
            superClaimNum: 500040204,
            superClaimStatus: 1,
            superClaimType: undefined,
            eventDate: 0,
            claimCause: 2,
            injuryType: 1,
            submitedBy: 1,
            submitionMethod: 1
        };
        this.insured = {
            address: {
                cityName: "רעננה",
                streetName: "אחוזה 20",
            },
            identityType: 1,
            age: 30,
            lastName: "כהן",
            identity: 312536945,
            firstName: "אסף"
        };
        this.contactPersons = [{
            id: 1,
            deliveryFlag: false,
            type: new KeyValue(0, ""),
            name: "ניקיטה ג'ין",
            phoneNumber: 0,
            email: "",
            address: ""
        }];

    }



}