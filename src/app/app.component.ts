import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  parentData = [];  
  selected = "";
  
  ngOnInit(): void {
    this.getParentJson().subscribe(
      (data) => {
        this.parentData = data;
      }
    )
  }

  getParentJson() {
    return of([
      {
        id: 10001,
        name: 'John',
      },
      {
        id: 10002,
        name: 'Sam',
      },
      {
        id: 10003,
        name: 'Tom',
      },
      {
        id: 10004,
        name: 'Tomssss',
      }
    ]);
  }  

  childCallback(ev){
    console.log(ev); 
  }
  
  title = 'Assignment';
  constructor(){
   
  }
}
