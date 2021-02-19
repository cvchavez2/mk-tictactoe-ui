import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }

  // Observable string sources
  private emitReload = new Subject();
  // Observable string streams
  reloadEvent = this.emitReload.asObservable();
  // Service message commands
  reloadBoard() {
      this.emitReload.next();
  }

}
