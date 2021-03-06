import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "../shared/pages.export";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ LoginService ]
})
export class LoginComponent implements OnInit {

  formInput={
    userName:'',
    pwd:''
  }

  constructor(private _router:Router,private _loginService:LoginService) { }

  ngOnInit() {
  }

  register(){
      this._router.navigate(['register']);
  }

  login(){
    let data={
            "username": "agni",
            "pwd": "agni"
        }
      // this._loginService.doAuthenticate(this.formInput)
      //     .subscribe(data=>{
      //         console.log(data);
      //           localStorage.setItem('user',data)
      //     },
      //     error=>{
      //       console.log(error);
      //     });
      localStorage.setItem('user',JSON.stringify(data));
      this._router.navigate(['home']);
      setTimeout(()=>{
          this.refresh();
      })
      
  }

  refresh(): void {
    window.location.reload();
}

}
