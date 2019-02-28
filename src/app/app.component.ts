// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//
//   newTodo: string;
//   todos: any;
//   todoObj: any;
//
//   constructor() {
//     this.newTodo = '';
//     this.todos = [];
//   }
//
//   addTodo(event) {
//     this.todoObj = {
//       newTodo: this.newTodo,
//       completed: false
//     }
//     this.todos.push(this.todoObj);
//     this.newTodo = '';
//     event.preventDefault();
//   }
//
//   deleteTodo(index) {
//     this.todos.splice(index, 1);
//   }
//
//   deleteSelectedTodos() {
//     for(let i = (this.todos.length -1 ); i > -1; i--) {
//       if(this.todos[i].completed) {
//         this.todos.splice(i, 1);
//       }
//     }
//   }
// }



// --

import { Component, OnInit } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('moveInLeft', [
      transition('void=> *', [style({transform: 'translateX(300px)'}),
        animate('200ms ease-out', keyframes([
          style({transform: 'translateX(300px)'}),
          style({transform: 'translateX(0)'})

        ]))]),
      transition('*=>void', [style({transform: 'translateX(0px)'}),
        animate('250ms ease-in',   keyframes([
          style({transform: 'translateY(-20px)', opacity: 1, offset: 0.2}),
          style({transform: 'translateY(250px)', opacity: 0 , offset: 1})

        ]))])

    ])
  ]
})
export class AppComponent implements OnInit{
  todoArray: string[] = [];

  public form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.constructForm();
  }

  constructForm() {
    this.form = this.fb.group({
      todo: this.fb.control(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.form.invalid) { return; }
    this.todoArray.push(this.form.get('todo').value);
    this.form.reset();
  }

  onDeleteItem(index) {
    this.todoArray.splice(index, 1);
  }


}
