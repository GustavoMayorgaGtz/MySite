import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareALaMedidaComponent } from './software-a-la-medida.component';

describe('SoftwareALaMedidaComponent', () => {
  let component: SoftwareALaMedidaComponent;
  let fixture: ComponentFixture<SoftwareALaMedidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareALaMedidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareALaMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
