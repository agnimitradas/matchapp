import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loggedInFlag: boolean = false;

  ngOnInit(): void {
    let userData = localStorage.getItem('user');
    this.loggedInFlag = !!userData;
  }

}
