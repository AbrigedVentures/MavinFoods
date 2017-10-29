import { TestBed, inject } from '@angular/core/testing';

import { AllocateGaurdService } from './allocate-gaurd.service';
import {Router} from '@angular/router';

let checkservice:AllocateGaurdService;
describe('AllocateGaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllocateGaurdService]
    });

    let router:Router; 
     checkservice =new AllocateGaurdService(router);
  });

  it('should be created', inject([AllocateGaurdService], (service: AllocateGaurdService) => {
    expect(service).toBeTruthy();
  }));

  it('testing mock can activate', ()=> {
    var ans = checkservice.canActivateMock("true");
    expect(ans).toBe(true);
  })
});
