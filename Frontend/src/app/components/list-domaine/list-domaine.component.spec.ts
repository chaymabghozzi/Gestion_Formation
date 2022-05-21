import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDomaineComponent } from './list-domaine.component';

describe('ListDomaineComponent', () => {
  let component: ListDomaineComponent;
  let fixture: ComponentFixture<ListDomaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDomaineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
