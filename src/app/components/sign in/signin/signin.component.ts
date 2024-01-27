import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl,FormsModule,NgModel } from '@angular/forms';
import { UserService } from 'src/app/core/service/user.service';
import { environment } from 'src/environments/environment';
import { Users } from '../../details page/details/details.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myusername:string = ""
  wrongUser:boolean= false
  constructor(private userService: UserService, private router: Router) { 
 
  }
 
  routerLink:string = ''
  ngOnInit(): void {
    
  }
  
  submit(){
    
    this.userService.getUser().subscribe(usernames =>{
      usernames.some((i:any)=>{
       
        if(i.username==this.myusername){
          this.wrongUser = false
          this.router.navigate(['homecard'])
          return true
          
        }
        else{
          this.wrongUser = true
          return false
        }
      })

      
    })


  }
}
