import { Component, OnInit } from '@angular/core';
import {ShipService} from "../ship.service";

@Component({
  selector: 'app-ship-details',
  templateUrl: './ship-details.component.html',
  styleUrls: ['./ship-details.component.css']
})
export class ShipDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
