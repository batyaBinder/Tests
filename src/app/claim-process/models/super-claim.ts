


export class SuperClaim {
    superClaimNum: number;
    superClaimStatus?: number;
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
        this.superClaimNum = 0;
        this.superClaimStatus = 1;
        this.superClaimType = undefined;
        this.eventDate = undefined;
        this.claimCause = undefined
        this.injuryType = undefined;
        this.submitedBy = undefined;
        this.submitionMethod = undefined;


    }
}