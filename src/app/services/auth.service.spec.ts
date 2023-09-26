import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('check for is auth',()=>{
let auth:AuthService;
  beforeEach(()=>{
     auth =new AuthService();
  });
  afterEach(()=>{
    localStorage.removeItem('token');
  });
  it('must return true if there is a token in localstorage',()=>{
    localStorage.setItem('token','hello');
    expect(auth.isAuth()).toBeTruthy();
  });
  it('must return false if there is a token in localstorage',()=>{
    expect(auth.isAuth()).toBeFalsy();
  });
});
