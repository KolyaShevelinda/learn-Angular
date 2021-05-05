import { Component, OnInit } from '@angular/core';

import { Worker } from '../worker';
import { WORKERS } from '../mock-workers';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  workers = WORKERS;
  selectedWorker?: Worker;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(worker: Worker): void {
    this.selectedWorker = worker;
  }

}
