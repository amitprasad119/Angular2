import { Component } from '@angular/core';
import {PostsService} from '../services/post.service'
@Component({
  moduleId : module.id,
  selector : 'user',
  templateUrl : 'user.component.html',
  providers : [PostsService]
})

export class UserComponent {
   name : string ;
   email : string ;
   address : Address;
   hobbies :string[];
   showHobbies : boolean;
   postData : userData[];
   constructor(private postsService : PostsService) {
     this.name = 'Amit',
     this.email = 'amitprasad.om@gmail.com',
     this.address = {
       street : '4th main 7th cross',
       city : 'Bangalore',
       state : 'Karanataka',
       pincode : '560076'
     }
     this.hobbies = ['Music','Movie','cricket','Fishing','Biking']
     this.showHobbies = false;
     this.postsService.getResponse().subscribe( post => {
        this.postData = post;
     });

   }

   toggleShowHobbies() {
       if(this.showHobbies == true) {
         this.showHobbies = false;
       } else {
         this.showHobbies = true;
       }
     }

       addHobby(hobby) {
         this.hobbies.push(hobby)
       }
        deleteHobby(i){
         this.hobbies.splice(i,1)
       }
 }

interface Address {
  street : string,
  city : string,
  state : string,
  pincode : string
}

interface userData {
  id : number,
  title : string,
  body : string

}
