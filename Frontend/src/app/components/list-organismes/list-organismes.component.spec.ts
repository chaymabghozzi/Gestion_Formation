import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrganismesComponent } from './list-organismes.component';

describe('ListOrganismesComponent', () => {
  let component: ListOrganismesComponent;
  let fixture: ComponentFixture<ListOrganismesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOrganismesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrganismesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
