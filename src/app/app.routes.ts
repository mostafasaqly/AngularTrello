import { Routes } from '@angular/router';
import { TodoComponent } from './Compoenets/todo/todo.component';

export const routes: Routes = [
  {path: '', redirectTo:'/todo', pathMatch:'full'},
  {path:"todo", component:TodoComponent, title: "Todo"}
];
