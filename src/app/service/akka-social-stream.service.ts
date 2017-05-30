import { Injectable } from '@angular/core';
import { QueueingSubject } from 'queueing-subject';
import { Observable } from 'rxjs';
import { WebSocketService } from 'angular2-websocket-service';
import 'rxjs/add/operator/share';

@Injectable()
export class AkkaSocialStreamService {
  private inputStream: QueueingSubject<any>;
  public outputStream: Observable<any>;

  constructor(private socketFactory: WebSocketService) {}

  public connect () {
    var result: Observable<any>;
    if (this.outputStream) {
      result = this.outputStream;
    } else {
      result = this.createOutputStream();
    }
    return result;
  }

  private createOutputStream() {
    this.inputStream = new QueueingSubject<any>();
    var test = this.socketFactory.connect('ws://localhost:9000/socialFeed', this.inputStream);
    return test.share();
  }

}
