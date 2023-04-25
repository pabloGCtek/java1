import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForModificarComponent } from './for-modificar.component';

describe('ForModificarComponent', () => {
  let component: ForModificarComponent;
  let fixture: ComponentFixture<ForModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForModificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
