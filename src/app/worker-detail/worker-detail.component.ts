import { Component, OnInit, Input } from '@angular/core';

import { Worker } from '../worker';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.css']
})
export class WorkerDetailComponent implements OnInit {

  @Input() worker?: Worker;

  constructor() { }

  ngOnInit(): void {
  }

}
