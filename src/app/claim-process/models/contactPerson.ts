import { KeyValue } from "./keyValue";

export class ContactPerson{
    id: number;
        deliveryFlag: boolean;
        type: KeyValue;
        name: string;
        phoneNumber: number;
        email: string;
        address: string;

        /**
         *
         */
        /**
         *
         */
        constructor(id:number, delivery:boolean, type:KeyValue,name:string,phoneNumber:number,email:string,address:string) {
            this.id=id;
            this.deliveryFlag=delivery;
            this.type=type;
            this.name=name;
            this.phoneNumber=phoneNumber;
            this.email=email;
            this.address=address;

        }
}