

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerziokezelesComponent } from './verziokezeles.component';

describe('VerziokezelesComponent', () => {
  let component: VerziokezelesComponent;
  let fixture: ComponentFixture<VerziokezelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerziokezelesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerziokezelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
