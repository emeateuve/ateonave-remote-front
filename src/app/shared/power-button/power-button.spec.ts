import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerButton } from './power-button';

describe('PowerButton', () => {
  let component: PowerButton;
  let fixture: ComponentFixture<PowerButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
