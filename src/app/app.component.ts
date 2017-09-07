import {Component, OnInit} from '@angular/core';
import {FakeServiceService} from "./fake-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers: [FakeServiceService]
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private fakeService: FakeServiceService){}

    ngOnInit(): void {
      this.fakeService.get().subscribe((next) => {
        console.log(next);
      });
    }

}
