import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeInfoService } from "../shared/pages.export";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeInfoService]
})
export class HomeComponent implements OnInit {

  matchData:any;  

  constructor(private _router:Router,private _homeInfoService:HomeInfoService) { }

  ngOnInit() {
     this.matchData =  this._homeInfoService.getAllMatches()
        //   .subscribe(data=>{
        //       console.log(data);
        // this.matchData = data;
        //   },error=>{
        //       console.log(error);
        //   });
  }

}
