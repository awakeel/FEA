import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderorganisationerComponent } from './underorganisationer.component';

describe('UnderorganisationerComponent', () => {
  let component: UnderorganisationerComponent;
  let fixture: ComponentFixture<UnderorganisationerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderorganisationerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderorganisationerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
