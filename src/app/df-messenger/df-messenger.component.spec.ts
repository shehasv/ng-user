import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DfMessengerComponent } from './df-messenger.component';

describe('DfMessengerComponent', () => {
  let component: DfMessengerComponent;
  let fixture: ComponentFixture<DfMessengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DfMessengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DfMessengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
