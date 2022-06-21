import { Component,EventEmitter, Input, OnChanges, Output, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Todo} from "../../Todo";
import { of } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnChanges {

  @Input() idVal:any = "";
  @Output() callback = new EventEmitter();

  data = [];
  selected = "";

  todos: Todo[];
  constructor() {
    this.todos = [
      {
        sno:1,
        title: "This is title",
        desc: "Description" ,
        active: true
      },
      {
        sno:2,
        title: "This is title2",
        desc: "Description" ,
        active: true
      },
      {
        sno:3,
        title: "This is title3",
        desc: "Description" ,
        active: true
      },
      
    ]
   }

  ngOnInit(): void {
  }

  ngOnChanges(e ) {
    console.log(e.idVal);
    if(!e || !e.idVal || !e.idVal.currentValue){
      this.data = [];
      this.callback.emit({status: 'NO_DATA_FOUND'});
      return;

  }
  const v = e.idVal.currentValue;
    this.loadData(v);    
  }

  loadData(id){
    this.getChildJson(id).subscribe(
      (r) => {
        this.data = r;
        if(this.data.length === 0){
          // this.callback.emit({status: 'NO_DATA_FOUND'});
          
          alert("NO Data Found")
        }
      }
    )
  }

  getChildJson(id) {
    const arr = [
      {
        id: 10001,
        age: 20,
      },
      {
        id: 10002,
        age: 50,
      },
      {
        id: 10003,
        age: 25,
      },
    ];
    return of(arr.filter(e => e.id == id));
  }

 
}
