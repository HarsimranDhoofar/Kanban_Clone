import { Injectable } from '@angular/core';
import { Board } from './models/board.model';
import{HttpClient} from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http'; 
import{map} from 'rxjs/operators';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudBackendService {
  
  private boards: Board[]=[];
  private boardUpdated = new Subject<Board[]>();
  constructor(private http: HttpClient) { }

newColumn(columnName: any){
console.log("service works!")
const board: Board = {name: columnName, columns:null};
this.http.post<{message:string, postId:string}>('http://localhost:3000/api/boards',board)
.subscribe((responseData)=>{
  console.log(responseData.message);
  });
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
