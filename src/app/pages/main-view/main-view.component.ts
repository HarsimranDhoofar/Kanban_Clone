import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Column } from 'src/app/models/column.model';
import { Description } from 'src/app/models/description.model';
import{ CrudBackendService } from '../../crud-backend.service';
import { Subscription } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  isModalActive: boolean = false;
  itemSeleted: String ="";
  itemFromColumn: any;
  column:Column[]=[];
  history:string[]=[];
  boardSub: Subscription
  value: String;
  constructor(public crudBackend: CrudBackendService) { }
  ngOnInit(): void {
    this.getBoardData();
  }
  
  getBoardData(){
    this.crudBackend.getBoard().subscribe((data)=>{
      const col = data["boards"]
      for(let i =0; i<=Object.keys(col).length -1; i++){
        const len = col[i]
        const _id = len['_id'];
        const columnName = len['name'];
        const taskLength = len['columns'];
        const description:Array<Description> =[];
        for(let a=0; a<=Object.keys(taskLength).length -1; a++){
           const leng = taskLength[a];
           const taskId = leng['_id'];
           const desc = leng['desc'];
           const history = leng['history'];
           const taskName = leng['taskName'];
            description.push(new Description(taskId,taskName, desc, history))
           
        }
        this.column.push(new Column(_id, columnName, description));

      } 
  
      
    });
    
  }
  onCreateNewColumn(){
    var columnName = prompt("Please enter the name of the column", "New Column");
    var col = new Column(this.makeid(9),columnName, [])
    this.column.push(col);
    this.crudBackend.newColumn(col);
    
  }
  onCreateNewTask(id:any, getColumnName: any){

    var taskname = prompt("Please enter the name of the task", "New Task");
    this.column.find((data)=>{
      this.history.push("New Task Created on: "+ Date.now())
      data.columns.push(new Description(this.makeid(9),taskname,"", this.history));
        if(data.name != getColumnName){
            data.columns.pop();
      }
      const col = new Column(id, getColumnName, data.columns);
      this.crudBackend.newTask(col);
      })
  
  }
  
  onDeleteColumn(id:any, getColumnName:any, getTasks:any){
    const conf = confirm('Are you sure you want to delete this column');
    if(conf == true){
    for(var i = this.column.length - 1; i >= 0; i--) {
      if(this.column[i].name === getColumnName) {
        this.column.splice(i, 1);
      }
  }
    this.crudBackend.deleteColumn(id);
}
  }
  onEditBoardName(){
     var getBoardName = prompt("Please enter the board Name", "New Board");
      
  }
  descriptionMethod(description,gettaskName){
    this.column.find((data)=>{
      for(var i = data.columns.length - 1; i >= 0; i--) {
        if(data.columns[i].taskName === gettaskName) {
          data.columns[i].desc = description;
        }
      }
    })
  }
  toggleModal(items, getColumnName) {
    console.log(this.itemSeleted);
    this.itemSeleted = items;
    this.itemFromColumn = getColumnName;
    this.isModalActive = !this.isModalActive;
   
  }
  editTaskName(gettaskName){
    var editName = prompt("Please enter the new taskName", "New Task Name");
    this.column.find((data)=>{
      for(var i = data.columns.length - 1; i >= 0; i--) {
        if(data.columns[i].taskName === gettaskName) {
          this.itemSeleted = editName;
          data.columns[i].taskName = editName;
          console.log( data.columns[i].taskName);
        }
      }
    })
  }
  toggleModalClose(){
    this.isModalActive = !this.isModalActive;
  }
  ondeleteTask(item, getColumnName){
    for(var i = this.column.length - 1; i >= 0; i--) {
      if(this.column[i].name === getColumnName) {
        for(var a = this.column[i].columns.length -1; a>=0; a--){
          if(this.column[i].columns[a].taskName === item){
            this.column[i].columns.splice(a, 1);
          }
        }
      }
  }
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

  makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result.toString();
  }
}
