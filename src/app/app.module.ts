import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WebSocketService } from 'angular2-websocket-service';
import { AkkaSocialStreamService } from './service/akka-social-stream.service'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AkkaSocialStreamViewComponent } from './akka-social-stream-view/akka-social-stream-view.component';
import { MaterialDesignLoaderModule } from './material-design-loader/material-design-loader.module';

@NgModule({
  declarations: [
    AppComponent,
    AkkaSocialStreamViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialDesignLoaderModule
  ],
  providers: [ WebSocketService, AkkaSocialStreamService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
