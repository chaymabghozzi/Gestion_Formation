import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProfilComponent } from './list-profil.component';

describe('ListProfilComponent', () => {
  let component: ListProfilComponent;
  let fixture: ComponentFixture<ListProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
