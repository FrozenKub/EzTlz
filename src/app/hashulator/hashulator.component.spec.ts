import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashulatorComponent } from './hashulator.component';

describe('HashulatorComponent', () => {
  let component: HashulatorComponent;
  let fixture: ComponentFixture<HashulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashulatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
