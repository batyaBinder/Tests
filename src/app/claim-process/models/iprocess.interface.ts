import { ContactPerson } from "./contactPerson";
import { Insured } from "./insured";

import { SuperClaim } from "./super-claim";

export interface IProcess {
    superClaim: SuperClaim;
    insured: Insured;
    contactPersons: ContactPerson[];
}