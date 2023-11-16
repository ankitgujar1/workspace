import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokendemoComponent } from './tokendemo.component';

describe('TokendemoComponent', () => {
  let component: TokendemoComponent;
  let fixture: ComponentFixture<TokendemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokendemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokendemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
