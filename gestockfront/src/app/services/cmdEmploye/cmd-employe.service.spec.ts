import { TestBed } from '@angular/core/testing';

import { CmdEmployeService } from './cmd-employe.service';

describe('CmdEmployeService', () => {
  let service: CmdEmployeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmdEmployeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
