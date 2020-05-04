import { Component, OnInit, NgZone} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Column } from 'src/app/models/column.model';
import { Description } from 'src/app/models/description.model';
import{ CrudBackendService } from '../../crud-backend.service';
import { Subscription } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
declare const annyang: any;
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  
  voiceActiveSectionDisabled: boolean = true;
  voiceActiveSectionDisabledTask: boolean = true;
  voiceActiveSectionError: boolean = false;
  voiceActiveSectionSuccess: boolean = false;
  voiceActiveSectionListening: boolean = false;
  voiceActiveSectionTasksDisabled: boolean = true;
  voiceActiveSectionTasksDisabledTask: boolean = true;
  voiceActiveSectionTasksError: boolean = false;
  voiceActiveSectionTasksSuccess: boolean = false;
  voiceActiveSectionTasksListening: boolean = false;
  voiceText: string;
  voiceTextTask: string;
  isModalActive: boolean = false;
  itemSeleted: String ="";
  itemFromColumn: any;
  column:Column[]=[];
  history:string[]=[];
  boardSub: Subscription
  value: String;
  message = '';
  onClickTaskColid: any;
  onClickTaskItem: any;
  constructor(public crudBackend: CrudBackendService, private ngZone: NgZone) { }

  initializeVoiceRecognitionCallback(): void {
    annyang.addCallback('error', (err) => {
      if(err.error === 'network'){
        this.voiceText = "Internet is require";
        annyang.abort();
        this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
      } else if (this.voiceText === undefined) {
        this.ngZone.run(() => this.voiceActiveSectionError = true);
        annyang.abort();
      }
    });
   annyang.addCallback('soundstart', (res) => {
    this.ngZone.run(() => this.voiceActiveSectionListening = true);
   });
   annyang.addCallback('end', () => {
     if (this.voiceText === undefined) {
       this.ngZone.run(() => this.voiceActiveSectionError = true);
       annyang.abort();
     }
   });
   annyang.addCallback('result', (userSaid) => {
     this.ngZone.run(() => this.voiceActiveSectionError = false);
     let queryText: any = userSaid[0];
     annyang.abort();
     this.voiceText = queryText;
     this.ngZone.run(() => this.voiceActiveSectionListening = false);
     this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
     if(this.voiceText !=null && this.voiceText !=""){
      this.onCreateNewColumnVoice();
      annyang.abort();
     }
     this.closeVoiceRecognition()
   });
   
 }
 startVoiceRecognitionColumn(): void {
   this.voiceActiveSectionDisabled = false;
   this.voiceActiveSectionError = false;
   this.voiceActiveSectionSuccess = false;
   this.voiceText = undefined;
   if (annyang) {
     let commands = {
       'demo-annyang': () => { }
     };
     annyang.addCommands(commands);
    
     this.initializeVoiceRecognitionCallback();
     annyang.start({ autoRestart: false });
     
   }
 }
 startVoiceRecognitionTask(id:any, getColumnName: any){
  this.voiceActiveSectionTasksDisabled = false;
  this.voiceActiveSectionTasksError = false;
  this.voiceActiveSectionTasksSuccess = false;
  this.voiceTextTask = undefined;
  if (annyang) {
    let commands = {
      'demo-annyang': () => { }
    };
    annyang.addCommands(commands);
   
    this.initializeVoiceRecognitionCallbackTask(id, getColumnName);
    annyang.start({ autoRestart: false });
    
  }
 }
 initializeVoiceRecognitionCallbackTask(id: any, getColumnName: any): void {
  annyang.addCallback('error', (err) => {
    if(err.error === 'network'){
      this.voiceTextTask = "Internet is require";
      annyang.abort();
      this.ngZone.run(() => this.voiceActiveSectionTasksSuccess = true);
    } else if (this.voiceTextTask === undefined) {
      this.ngZone.run(() => this.voiceActiveSectionTasksError = true);
      annyang.abort();
    }
  });
 annyang.addCallback('soundstart', (res) => {
  this.ngZone.run(() => this.voiceActiveSectionTasksListening = true);
 });
 annyang.addCallback('end', () => {
   if (this.voiceTextTask === undefined) {
     this.ngZone.run(() => this.voiceActiveSectionTasksError = true);
     annyang.abort();
   }
 });
 annyang.addCallback('result', (userSaid) => {
   this.ngZone.run(() => this.voiceActiveSectionTasksError = false);
   let queryText: any = userSaid[0];
   annyang.abort();
   this.voiceTextTask = queryText;
   this.ngZone.run(() => this.voiceActiveSectionTasksListening = false);
   this.ngZone.run(() => this.voiceActiveSectionTasksSuccess = true);
   if(this.voiceText !=null && this.voiceText !=""){
    this.onCreateNewTaskVoice(id, getColumnName, this.voiceTextTask);
    annyang.abort();
   }
   this.closeVoiceRecognition()
 });
 
}
 closeVoiceRecognition(): void {
   this.voiceActiveSectionDisabled = true;
   this.voiceActiveSectionError = false;
   this.voiceActiveSectionSuccess = false;
   this.voiceActiveSectionListening = false;
   this.voiceText = undefined;
   if(annyang){
    annyang.abort();
   }
 }






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
           if(taskName != null && taskName !=""){
            description.push(new Description(taskId,taskName, desc, history))
           }
           
        }
        this.column.push(new Column(_id, columnName, description));

      } 
  
      
    });
    
  }
  onCreateNewColumn(){
    var columnName = prompt("Please enter the name of the column", "New Column");
    if(columnName != null && columnName !=""){
      var col = new Column(this.makeid(9),columnName, [])
      this.column.push(col);
      this.crudBackend.newColumn(col);
    }
    else{
      alert("Column name can not be empty");
    }
    
    
  }
  onCreateNewColumnVoice(){
    var col = new Column(this.makeid(9),this.voiceText, [])
    this.column.push(col);
    this.crudBackend.newColumn(col);
    
  }
  onCreateNewTask(id:any, getColumnName: any){

    var taskname = prompt("Please enter the name of the task", "New Task");
    if(taskname !=null && taskname !=""){
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
  }
  onCreateNewTaskVoice(id:any, getColumnName: any, voiceTaskName:any){

    if(voiceTaskName !=null && voiceTaskName !=""){
    this.column.find((data)=>{
      this.history.push("New Task Created on: "+ Date.now())
      data.columns.push(new Description(this.makeid(9),voiceTaskName,"", this.history));
        if(data.name != getColumnName){
            data.columns.pop();
      }
      const col = new Column(id, getColumnName, data.columns);
      this.crudBackend.newTask(col);
      })
    }
  }
  onDeleteColumn(id:any, getColumnName:any, getTasks:any){
    const conf = confirm('Are you sure you want to delete this column?');
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
  toggleModal(id, items, getColumnName) {
   this.onClickTaskColid =id;
   this.onClickTaskItem = items;
   
    console.log(this.itemSeleted);
    this.itemSeleted = items;
    this.itemFromColumn = getColumnName;
    this.isModalActive = !this.isModalActive;
   
  }
  onClearEveryThing(){
    const conf = confirm('Are you sure you want to delete everything and start fresh?');
    if(conf == true){
    this.column = [];
    this.crudBackend.clearEveryThing();
    }
  }
  editTaskName(gettaskName: any){
    var editName = prompt("Please enter the new taskName", "New Task Name");
    this.column.find((data)=>{
      for(var i = data.columns.length - 1; i >= 0; i--) {
        if(data.columns[i].taskName === gettaskName) {
          this.itemSeleted = editName;
          data.columns[i].taskName = editName;
          console.log( data.columns[i].taskName);
        }
      }
      const col = new Column(this.onClickTaskColid, this.onClickTaskItem, data.columns);
      this.crudBackend.editTask(col);

      
    })
    
  }
  toggleModalClose(){
    this.isModalActive = !this.isModalActive;
  }
  ondeleteTask(taskId, colId, item, getColumnName){
    for(var i = this.column.length - 1; i >= 0; i--) {
      if(this.column[i].name === getColumnName) {
        for(var a = this.column[i].columns.length -1; a>=0; a--){
          if(this.column[i].columns[a].taskName === item){
            this.column[i].columns.splice(a, 1);
          }
        }
      }
  }
  this.crudBackend.deleteTask(taskId, colId, item);
  }
 








  drop(event: CdkDragDrop<string[]>) {
    console.log(event.container.data, event.previousIndex, event.currentIndex)
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
