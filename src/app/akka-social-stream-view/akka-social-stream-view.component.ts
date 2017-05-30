import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {AkkaSocialStreamService} from "../service/akka-social-stream.service";

@Component({
  selector: 'app-akka-social-stream-view',
  templateUrl: './akka-social-stream-view.component.html',
  styleUrls: ['./akka-social-stream-view.component.css']
})
export class AkkaSocialStreamViewComponent implements OnDestroy {
  private socketSubscription: Subscription;
  feeds: Array<any> = new Array();

  constructor(private socket: AkkaSocialStreamService) {
    const stream = this.socket.connect();

    this.socketSubscription = stream.subscribe((message:any) => {
      var aux = this.feeds.slice(0); // Clones array.
      aux.push(message);
      aux.sort((a: any, b: any) => {
        if (a.date > b.date) {
          return -1;
        } else if (a.date < b.date) {
          return 1;
        } else {
          return 0;
        }
      });
      this.feeds = aux;
    });
  }


  ngOnDestroy() {
    this.socketSubscription.unsubscribe();
  }
}
