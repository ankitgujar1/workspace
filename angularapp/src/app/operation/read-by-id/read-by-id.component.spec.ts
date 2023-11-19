import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadByIdComponent } from './read-by-id.component';

describe('ReadByIdComponent', () => {
  let component: ReadByIdComponent;
  let fixture: ComponentFixture<ReadByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
