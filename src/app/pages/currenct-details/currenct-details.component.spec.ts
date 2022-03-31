import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenctDetailsComponent } from './currenct-details.component';

describe('CurrenctDetailsComponent', () => {
  let component: CurrenctDetailsComponent;
  let fixture: ComponentFixture<CurrenctDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrenctDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenctDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
