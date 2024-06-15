import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private nextId: number = 1;

  constructor() {}

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(task: string): void {
    this.todos.push({ id: this.nextId++, task, completed: false });
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleTodoCompletion(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}
