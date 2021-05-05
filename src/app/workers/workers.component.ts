import { Component, OnInit } from '@angular/core';
import { Worker } from '../worker';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  worker: Worker = {
    id: 1,
    name: 'Nikolay',
    surname: 'Shevelinda',
    profession: 'mechanic'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
