import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameComponent } from './frame/frame.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { BoxDetailsComponent } from './box-details/box-details.component'

@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
    HomeComponent,
    BoxDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
