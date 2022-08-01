import { KeyValue } from "./keyValue";
import { claimCause, superClaimType,submitedBy,injuryType,submitionMethod } from 'src/app/claim-process/data/data';


export class ContactPerson{
    id: number;
        deliveryFlag?: boolean;
        type?: KeyValue;
        name?: string;
        phoneNumber?: number;
        email?: string;
        address: {
            cityName: string;
            streetName: string;
        };
        
        constructor() {
            this.id=12;
            this.deliveryFlag=true;
            this.type=undefined;
            this.name=undefined;
            this.phoneNumber=undefined;
            this.email=undefined;
            this.address= { cityName: "", streetName: "" };;

        }
}