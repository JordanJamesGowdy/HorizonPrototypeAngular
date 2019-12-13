import { Component, OnInit } from '@angular/core';
import { Severity } from 'src/models/severity';
import { SeveritiesService } from '../severities.service';

@Component({
  selector: 'app-severity',
  templateUrl: './severity.component.html',
  styleUrls: ['./severity.component.css']
})
export class SeverityComponent implements OnInit {

  list: Severity[];

  constructor() { 

  }

  ngOnInit() {
    // this.service.getSevereties().subscribe(
    //   res => {this.list = res }
    // );
  }

}
