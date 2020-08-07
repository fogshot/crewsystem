import {TestBed} from '@angular/core/testing';

import {ShipService} from './ship.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {environment} from "../../environments/environment";
import {HttpRequest} from "@angular/common/http";

describe('ShipService', () => {
  let httpTestingController: HttpTestingController;
  let service: ShipService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShipService],
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ShipService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#save()', () => {
    it('should return Observable matching the saved data.', () => {
      const mockShip = {
        id: undefined,
        name: 'Statsraad Lehmkuhl'
      };

      service.save(mockShip)
        .subscribe(shipData => {
          expect(shipData.name).toEqual('Statsraad Lehmkuhl');
        });

      const req = httpTestingController.expectOne(`${environment.backend_url}/ships`);
      expect(req.request.method).toEqual('POST');
      req.flush(mockShip);
    });
  });

  describe('#findAll()', () => {
    it('should return Observable containing some mocked ships.', () => {
      const mockShips = [
        {
          id: 1,
          name: 'Germania VI'
        },
        {
          id: 2,
          name: 'Statsraad Lehmkuhl'
        }
      ];

      service.findAll()
        .subscribe(shipsData => {
          expect(shipsData[0].name).toEqual('Germania VI');
          expect(shipsData[1].name).toEqual('Statsraad Lehmkuhl');
        });

      const req = httpTestingController.expectOne(`${environment.backend_url}/ships`);
      expect(req.request.method).toEqual('GET');
      req.flush(mockShips);
    });
  });
});
