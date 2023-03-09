import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatabaseSerService {

  constructor(private http: HttpClient) { }

fetchTodo(){
 return this.http.get<{message: string, docs: []}>("http://localhost:3000/ecomms");
}
insertTodo(obj: any){
return this.http.post<{message: string}>("http://localhost:3000/ecomms", obj);
}
updateTodo(newObj: any, id: string){
return this.http.put<{message: string}>(`http://localhost:3000/ecomms/${id}`, newObj);
}
deleteTodo(id: string){
return this.http.delete<{message: string}>(`http://localhost:3000/ecomms/${id}`);
}
}