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
}
newTask(taskname: string, getColumnName: any) {
  
  let a = this.boards.find((data)=>{
     if(getColumnName == data.name){
        const desc= new Description("1231",taskname,"",this.history)
        data.columns.push(desc)
        const col: Column = {_id: data._id, name: data.name, columns:data.columns};
        this.http.patch<{message:string, postId:string}>('http://localhost:3000/api/boards',col)
             .subscribe((responseData)=>{
            console.log(responseData.message);
          });
     }
  })
}
getBoard(){
  this.http.get<{message:string, boards:any}>('http://localhost:3000/api/boards')
  .pipe(map((boardData)=>{
    return boardData.boards.map(board=>{
           return{
              name:board.name,
              columns:board.columns
           };
     });
  }))
  .subscribe((transformedBoard)=>{
    this.boards =transformedBoard;
    this.boardUpdated.next([...this.boards]);
 });
}
getBoardUpdateListener(){
  return this.boardUpdated.asObservable();
  }

}
