import { Component, OnInit } from '@angular/core';

import { Worker } from '../worker';
import { WorkerService } from '../worker.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {
  
  selectedWorker?: Worker;
  workers: Worker[] = [];

  constructor(private workerService: WorkerService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.getWorkers();
  }

  onSelect(worker: Worker): void {
    this.selectedWorker = worker;
    this.messageService.add(`WorkersComponent: Selected worker id=${worker.id}`);
  }

  getWorkers(): void {
    // this.workers = this.workerService.getWorkers();
    this.workerService.getWorkers().subscribe(workers => this.workers = workers);
  }

}
