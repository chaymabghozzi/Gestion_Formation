import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParticipantComponent } from './add-participant.component';

describe('AddParticipantComponent', () => {
  let component: AddParticipantComponent;
  let fixture: ComponentFixture<AddParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddParticipantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
