import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';
import{ CrudBackendService } from '../../crud-backend.service';
import { Subscription } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor(public crudBackend: CrudBackendService) { }
  boards:Board[]=[];
  boardName : any = "board Name";
  private boardSub: Subscription
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
    var columnNameFetched ="";
    var columItemFetched=[];
    this.crudBackend.getBoard();
    this.boardSub= this.crudBackend.getBoardUpdateListener().subscribe((boards:Board[]) =>{
      boards.find(x =>{
       columnNameFetched = x.name;
       columItemFetched = x.columns;
       this.board.columns.push( new Column(columnNameFetched,columItemFetched));
      });
      
    });
  }
  
  onCreateNewColumn(){
    var columnName = prompt("Please enter the name of the column", "New Column");
    this.board.columns.push( new Column(columnName,[]));
    this.crudBackend.newColumn(columnName);
    
  }
  onCreateNewTask(getColumnName: any){
    var taskname = prompt("Please enter the name of the task", "New Task");
    this.board.columns.find(x => {
      x.name === getColumnName
      x.columns.push(taskname);
      if(x.name != getColumnName){
        x.columns.pop();
      }
    });
  
  }
  onEditBoardName(){
     var getBoardName = prompt("Please enter the board Name", "New Board");
      this.board.name = getBoardName;
      this.boardName = getBoardName;
      
  }
  ondeleteTask(item, getColumnName){
     console.log(item);
     console.log(getColumnName);
     var name= this.board.columns.find(x => {
      x.name === getColumnName
     var number = x.columns.indexOf(item);
     if (number > -1) {
     x.columns.splice(number, 1);
     }
    });
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