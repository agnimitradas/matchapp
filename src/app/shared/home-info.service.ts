import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class HomeInfoService {

data:any = [
          {
                "date":"27/12/2017",
                "from": "madhapur",
                "to": "pune",
                "status": "pending"   
            },
            {
                "date":"29/12/2017",
                "from": "marathalli",
                "to": "attapur",
                "status": "matched"
            },
            {
                "date":"29/12/2017",
                "from": "marathalli",
                "to": "attapur",
                "status": "completed"
            },
  ]
    constructor(private _http:Http) { }

    getAllMatches():Observable<any>{
        // return this._http.get('app/shared/db.json')
        //             .map((response:Response)=>{
        //                 return response.json();
        //             });
        return this.data;
    }
}