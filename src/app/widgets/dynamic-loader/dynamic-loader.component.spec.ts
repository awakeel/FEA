import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLoaderComponent } from './dynamic-loader.component';

describe('DynamicLoaderComponent', () => {
  let component: DynamicLoaderComponent;
  let fixture: ComponentFixture<DynamicLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
