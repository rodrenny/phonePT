import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneContainerComponent } from './phone-container.component';

describe('PhoneContainerComponent', () => {
  let component: PhoneContainerComponent;
  let fixture: ComponentFixture<PhoneContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
