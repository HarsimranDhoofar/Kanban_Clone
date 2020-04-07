import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }
board:Board =new Board('Test Board',[
  new Column('Ideas',[
          "Some random Idea",
          "This is an other Random Idea",
          "Build an Awsome Application"
  ]),
   new Column('Research',[
            "This is Research",
            "bobobo",
            "lol"
  ]),
   new Column('ToDo',[
    "Get to work",
    "Pick up groceries",
    "Go home",
    "Fall asleep"
   ]),
   new Column('Done',[
    "Get up",
    "Brush teeth",
    "Take a shower",
    "Check e-mail",
    "Walk dog"
   ])
  ]);

  ngOnInit(): void {
  }
  
  onCreateNewColumn(){
    var columnName = prompt("Please enter the name of the column", "New Column");
    this.board.columns.push( new Column(columnName,[
      "Get up",
      "Brush teeth",
      "Take a shower",
      "Check e-mail",
      "Walk dog"
     ]))
  }
  onCreateNewTask(getColumnName: any){
    var taskname = prompt("Please enter the name of the task", "New Task");
    var name= this.board.columns.find(x => {
      x.name === getColumnName
      x.columns.push(taskname);
      if(x.name != getColumnName){
        x.columns.pop();
      }
    });
  
    console.log(name);
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
