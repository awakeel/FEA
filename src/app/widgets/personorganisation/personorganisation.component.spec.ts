import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonorganisationComponent } from './personorganisation.component';

describe('PersonorganisationComponent', () => {
  let component: PersonorganisationComponent;
  let fixture: ComponentFixture<PersonorganisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonorganisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonorganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
