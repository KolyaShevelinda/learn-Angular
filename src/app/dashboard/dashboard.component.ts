import { Component, OnInit } from '@angular/core';

import { Worker } from '../worker';

import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  workers: Worker[] = [];

  constructor(private workerService: WorkerService) { }

  ngOnInit(): void {
    this.getWorkers();
  }

  getWorkers(): void {
    this.workerService.getWorkers().subscribe(workers => this.workers = workers.slice(0, 20));
  }

}
