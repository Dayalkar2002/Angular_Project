import { Component, OnInit } from '@angular/core';
import { TodoService, Todo } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  newTask: string = '';
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void {
    if (this.newTask.trim().length) {
      this.todoService.addTodo(this.newTask);
      this.newTask = '';
    }
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
  }

  toggleCompletion(id: number): void {
    this.todoService.toggleTodoCompletion(id);
  }
}
