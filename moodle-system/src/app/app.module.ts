import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LecturesListComponent } from './lectures-list/lectures-list.component';
import { LectureComponent } from './lecture/lecture.component';

@NgModule({
  declarations: [
    AppComponent,
    LecturesListComponent,
    LectureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
