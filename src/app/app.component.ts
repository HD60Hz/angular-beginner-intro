import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TodoListService} from './services/todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  todoArray: string[] = [];

  public form: FormGroup;
  constructor(private fb: FormBuilder, private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.constructForm();
    this.todoListService.getMock().subscribe((value) => { this.todoArray = value; });
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
