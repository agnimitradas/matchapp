import { Component, OnInit } from '@angular/core';
import { RoutesService } from '../shared/pages.export'

@Component({
  selector: 'app-new-match',
  templateUrl: './new-match.component.html',
  styleUrls: ['./new-match.component.css']
})
export class NewMatchComponent implements OnInit {

  routes:any;

  formInput:any={
    route:'R1',
    pickup:'',
    Destination:'',
    doj:'',
    havingTruckOption:'',
    truckType:'T1',
    spacesRequired:'L1'
  }
  constructor(private _routesService:RoutesService) { }

  ngOnInit() {
    this._routesService.getRoutesNames()
            .subscribe(data=>{
              this.routes = data;
            },error=>{
              console.log(error);
            })
  }

  submitNew(){
    console.log(this.formInput);
  }

  reset(personForm){
    // alert(personForm);
    // this.formInput={
    //   route:'R1',
    //   pickup:'',
    //   Destination:'',
    //   doj:'',
    //   havingTruckOption:'',
    //   truckType:'T1',
    //   spacesRequired:'L1'
    // }
    personForm.reset();
  }

}
