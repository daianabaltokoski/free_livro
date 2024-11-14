import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoLerComponent } from './como-ler.component';

describe('ComoLerComponent', () => {
  let component: ComoLerComponent;
  let fixture: ComponentFixture<ComoLerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComoLerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComoLerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
