import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtToPngComponent } from './txt-to-png.component';

describe('TxtToPngComponent', () => {
  let component: TxtToPngComponent;
  let fixture: ComponentFixture<TxtToPngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxtToPngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtToPngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
