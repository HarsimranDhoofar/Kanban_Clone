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
  constructor(private http: HttpClient) { }


newColumn(col: Column){
this.http.post<{message:string, postId:string}>('http://localhost:3000/api/boards',col).subscribe((responseData)=>{
        console.log(responseData.message);
  });
this.boards.push(col);
}

deleteColumn(_id: any) {
  this.http.delete<{message:string}>("http://localhost:3000/api/boards/" + _id).subscribe((responseData)=>{
      console.log(responseData.message);
    });
    
}

newTask(col: Column) {
        this.http.put<{message:string, postId:string}>('http://localhost:3000/api/boards',col)
             .subscribe((responseData)=>{
            console.log(responseData.message);

});
}

deleteTask(taskId: any, colId: any, item:any) {
  this.http.delete<{message:string}>("http://localhost:3000/api/boards/" + colId +"/"+item).subscribe((responseData)=>{
    console.log(responseData.message);
  });
}

getBoard(){
  return this.http.get<{message:string, boards:any}>('http://localhost:3000/api/boards')
}



getBoardUpdateListener(){
  return this.boardUpdated.asObservable();
  }

}
