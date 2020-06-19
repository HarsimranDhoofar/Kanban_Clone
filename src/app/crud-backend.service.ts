import { Injectable, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import{HttpClient} from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http'; 
import{map} from 'rxjs/operators';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Column } from './models/column.model';
import { Description } from './models/description.model';
@Injectable({
  providedIn: 'root'
})
export class CrudBackendService {
  
  private boardUpdated = new Subject<Column[]>();
  boards: Array<Column> =[];
  history: Array<any>  =[];
  columnUpdateTask: Column = new Column("","",[]);
  constructor(private http: HttpClient) { }
  

newColumn(col: Column){
this.http.post<{message:string, postId:string}>('http://nodeangular-env.eba-vtimkjvk.us-east-2.elasticbeanstalk.com/api/boards',col).subscribe((responseData)=>{
        console.log(responseData.message);
  });
this.boards.push(col);
}

deleteColumn(_id: any) {
  this.http.delete<{message:string}>("http://nodeangular-env.eba-vtimkjvk.us-east-2.elasticbeanstalk.com/api/boards/" + _id).subscribe((responseData)=>{
      console.log(responseData.message);
    });
    
}

newTask(col: Column) {
        this.http.put<{message:string, postId:string}>('http://nodeangular-env.eba-vtimkjvk.us-east-2.elasticbeanstalk.com/api/boards',col)
             .subscribe((responseData)=>{
            console.log(responseData.message);

});
}
editTask(taskNameToBeUpdated: any, colIdUserClickedOn: any) {
  console.log(taskNameToBeUpdated);
  
  this.http.delete('http://nodeangular-env.eba-vtimkjvk.us-east-2.elasticbeanstalk.com/api/boards/edit/' + colIdUserClickedOn/taskNameToBeUpdated)
  .subscribe((responseData)=>{
    
  });
}
clearEveryThing() {
  this.http.delete<{message:string}>("http://nodeangular-env.eba-vtimkjvk.us-east-2.elasticbeanstalk.com/api/boards/clearEveryThing/All/E").subscribe((responseData)=>{
    console.log(responseData.message);
  })
}
deleteTask(taskId: any, colId: any, item:any) {
  this.http.delete<{message:string}>("http://nodeangular-env.eba-vtimkjvk.us-east-2.elasticbeanstalk.com0/api/boards/" + colId +"/"+item).subscribe((responseData)=>{
    console.log(responseData.message);
  });
}

getBoard(){
  return this.http.get<{message:string, boards:any}>('http://nodeangular-env.eba-vtimkjvk.us-east-2.elasticbeanstalk.com/api/boards');
}



getBoardUpdateListener(){
  return this.boardUpdated.asObservable();
  }

}
