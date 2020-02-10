import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts:Contact[];
  constructor() {
    this.contacts=[
      {contactID:101,firstName:"pushpa",lastName:"mothuku",dob:new Date("1998-03-05"),mobileNumber:"19951530397",alternateMobileNumber:"19703606830",mailId:"mpu1@gmail.com",organization:"physical"},
      {contactID:102,firstName:"pushp",lastName:"mot",dob:new Date("1997-03-05"),mobileNumber:"29951530397",alternateMobileNumber:"29703606830",mailId:"mpu2@gmail.com",organization:"maths"},
      {contactID:103,firstName:"push",lastName:"m",dob:new Date("1996-03-05"),mobileNumber:"39951530397",alternateMobileNumber:"39703606830",mailId:"mpu3@gmail.com",organization:"chemical"}
    ];
   }
   getAll():Contact[]{
     return this.contacts;
   }
   get(id:number){
     return this.contacts.find((c)=>(c.contactID==id));
   }
   add(contact:Contact){
     this.contacts.push(contact);
   }
   update(contact:Contact){
    let index=this.contacts.findIndex((c)=>(c.contactID===contact.contactID));
    if(index>-1){
      this.contacts[index]=contact;
    }
   }
   delete(id:number){
     let index=this.contacts.findIndex((contact)=>(contact.contactID===id));
     if(index>-1){
      this.contacts.splice(index,1);
    }
   }
}
