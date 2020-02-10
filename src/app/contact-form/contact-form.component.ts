import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  private contact:Contact;
  private isNew: boolean;
  private dobstr:string;

  constructor( private contServ:ContactService,
    private routeData:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.routeData.params.subscribe(
      (params)=>{
        let contactID = params['cid'];

        if(contactID==undefined){
          this.isNew=true;
          this.contact=new Contact();
          this.dobstr=(new Date()).toISOString().substr(0,10);

        }else{
          this.contact=this.contServ.get(contactID)
          this.isNew=false;
          this.dobstr=this.contact.dob.toISOString().substr(0,10);
        }
      }
    );
  }
  dobupdate(){
    this.contact.dob=new Date(this.dobstr);
  }
  save(){
    if(this.isNew){
      this.contServ.add(this.contact);
    }else{
      this.contServ.update(this.contact);
    }
    this.router.navigateByUrl("/list");
  }

}
