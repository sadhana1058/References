import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDesignationDetailsComponent } from './edit-designation-details.component';

describe('EditDesignationDetailsComponent', () => {
  let component: EditDesignationDetailsComponent;
  let fixture: ComponentFixture<EditDesignationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDesignationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDesignationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
