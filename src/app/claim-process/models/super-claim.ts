import { KeyValue } from "./keyValue";
import { superClaimType } from "../data/data";




export class SuperClaim {
    superClaimNum: number;
    superClaimStatus?: KeyValue;
    superClaimType?:  number
    eventDate?: number;
    claimCause?: number;
    injuryType?: number;
    submitedBy?: number;
    submitionMethod?: number;

    /**
     *
     */
    constructor() {
        this.superClaimNum = 1;
        this.superClaimStatus = undefined;
        this.superClaimType = undefined;
        this.eventDate = undefined;
        this.claimCause = undefined
        this.injuryType = undefined;
        this.submitedBy = undefined;
        this.submitionMethod = undefined;


    }
}