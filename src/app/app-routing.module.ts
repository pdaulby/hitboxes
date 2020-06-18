import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FrameComponent } from './frame/frame.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'frame', component: FrameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
