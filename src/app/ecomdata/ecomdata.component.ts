import { Component, OnInit } from '@angular/core';
import { DatabaseSerService } from './database-ser.service';
@Component({
  selector: 'app-ecomdata',
  templateUrl: './ecomdata.component.html',
  styleUrls: ['./ecomdata.component.css']
})
export class EcomdataComponent implements OnInit {
  title = "My-Data";
  time = "";
  todoArray: any;
constructor(private database: DatabaseSerService) { }
ngOnInit(): void {
    this.fetchTodo();
    }
  fetchTodo() {
    this.database.fetchTodo().subscribe(data => {
      this.todoArray = data.docs;
    }, error => {
      console.log(error);
    })
  }
  save() {
    let obj = {
      title: this.title
    }
    this.database.insertTodo(obj).subscribe(data => {
      alert(data.message)
      this.fetchTodo();
    }, error => {
      alert(error.message)
    })
  }
  edit(todo: any) {
    let newValue = prompt("Do You Really Want To Change", todo.title);
    if (newValue != "") {
      let obj = {
        newValue: newValue
      }
      this.database.updateTodo(obj, todo._id).subscribe(data => {
        alert(data.message);
        this.fetchTodo();
        this. title = "";
      }, error => {
        alert(error.message);
      })
    }
  }
  delete(id: string) {
    this.database.deleteTodo(id).subscribe(data => {
      alert(data.message);
      this.fetchTodo();
    }, error => {
      alert(error.message);
    })
  }
}
