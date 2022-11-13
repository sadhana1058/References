import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPayRuleDetailsComponent } from './edit-pay-rule-details.component';

describe('EditPayRuleDetailsComponent', () => {
  let component: EditPayRuleDetailsComponent;
  let fixture: ComponentFixture<EditPayRuleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPayRuleDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPayRuleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
