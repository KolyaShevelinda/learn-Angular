import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkersComponent } from './workers/workers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkerDetailComponent } from './worker-detail/worker-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: WorkerDetailComponent },
  { path: 'workers', component: WorkersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
