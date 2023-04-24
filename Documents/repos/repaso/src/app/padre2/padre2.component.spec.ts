import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Padre2Component } from './padre2.component';

describe('Padre2Component', () => {
  let component: Padre2Component;
  let fixture: ComponentFixture<Padre2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Padre2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Padre2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
