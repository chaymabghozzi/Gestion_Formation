import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaysComponent } from './list-pays.component';

describe('ListPaysComponent', () => {
  let component: ListPaysComponent;
  let fixture: ComponentFixture<ListPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
