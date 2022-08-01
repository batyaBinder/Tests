import { submitedBy, superClaimType } from "../data/data";
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
            superClaimStatus: superClaimType[1],
            superClaimType: undefined,
            eventDate: undefined,
            claimCause: undefined,
            injuryType: undefined,
            submitedBy: undefined,
            submitionMethod: undefined
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
            type: submitedBy[0],
            name: "ניקיטה גין",
            phoneNumber: 89453641,
            email: "bg@gmail.com",
            address: {
                cityName: "בני ברק",
                streetName: "הזית 20",
            }
        },
        {
            id: 2,
            deliveryFlag: true,
            type: submitedBy[1],
            name: "חיים לוי",
            phoneNumber: 533112028,
            email: "cl@walla.co.il",
            address: {
                cityName: "עפולה",
                streetName: "הזית 18",
            }
        }];

    }



}