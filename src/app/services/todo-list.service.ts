import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todoMock = ['Faire les courses', 'Réparer la voiture', 'Rdv 17h00'];

  public getMock(): Observable<string[]> {
    return of(this.todoMock);
  }

}
