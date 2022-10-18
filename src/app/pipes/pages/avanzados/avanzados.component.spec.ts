import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvanzadosComponent } from './avanzados.component';

describe('AvanzadosComponent', () => {
  let component: AvanzadosComponent;
  let fixture: ComponentFixture<AvanzadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvanzadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvanzadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
