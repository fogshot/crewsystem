import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Ship} from '../ship';
import {ShipService} from '../ship.service';

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit {
  ships$: Observable<Ship[]>;
  columnsToDisplay = ['id', 'name'];

  constructor(private shipService: ShipService) {
  }

  ngOnInit(): void {
    this.ships$ = this.shipService.findAll();
  }

}
