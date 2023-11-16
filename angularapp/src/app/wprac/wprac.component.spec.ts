import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpracComponent } from './wprac.component';

describe('WpracComponent', () => {
  let component: WpracComponent;
  let fixture: ComponentFixture<WpracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
