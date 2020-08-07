import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipListComponent } from './ship-list.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ShipListComponent', () => {
  let component: ShipListComponent;
  let fixture: ComponentFixture<ShipListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
