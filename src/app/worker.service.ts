import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Worker } from './worker';
import { WORKERS } from './mock-workers';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private messageService: MessageService) { }

  getWorkers(): Observable<Worker[]> {
    const workers = of(WORKERS);
    this.messageService.add('WorkerService: fetched workers');
    return workers;
  }
}
