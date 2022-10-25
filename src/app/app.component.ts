import { Component, OnInit } from '@angular/core';
import { IInfectionData } from './iinfection-data';
import { InfectionService } from './infection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'homework5';
  iWantTheThruth = false;
  infectionData: IInfectionData[] = [];

  constructor(private infectionservice: InfectionService) {
  }

  ngOnInit() {
    this.infectionData = this.infectionservice.getInfectionData(10);
  }
}
