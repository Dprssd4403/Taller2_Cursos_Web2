import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { activeChildGuard } from './active-child-guard';

describe('activeChildGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => activeChildGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
