import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePayRuleDetailsComponent } from './create-pay-rule-details.component';

describe('CreatePayRuleDetailsComponent', () => {
  let component: CreatePayRuleDetailsComponent;
  let fixture: ComponentFixture<CreatePayRuleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePayRuleDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePayRuleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
