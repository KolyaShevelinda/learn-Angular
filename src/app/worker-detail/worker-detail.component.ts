import { Component, OnInit, Input } from '@angular/core';

import { Worker } from '../worker';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.css']
})
export class WorkerDetailComponent implements OnInit {

  worker: Worker;

  constructor(private route: ActivatedRoute,
              private workerService: WorkerService,
              private location: Location) { }

  ngOnInit(): void {
    this.getWorker();
  }

  getWorker(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.workerService.getWorker(id).subscribe(worker => worker = worker);
  }

  goBack(): void {
    this.location.back();
  }

}
