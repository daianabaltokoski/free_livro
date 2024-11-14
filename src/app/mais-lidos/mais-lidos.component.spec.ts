import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisLidosComponent } from './mais-lidos.component';

describe('MaisLidosComponent', () => {
  let component: MaisLidosComponent;
  let fixture: ComponentFixture<MaisLidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaisLidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaisLidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
