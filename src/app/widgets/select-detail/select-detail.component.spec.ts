import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDetailComponent } from './select-detail.component';

describe('SelectDetailComponent', () => {
  let component: SelectDetailComponent;
  let fixture: ComponentFixture<SelectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
