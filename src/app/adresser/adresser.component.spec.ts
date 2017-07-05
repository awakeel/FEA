import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresserComponent } from './adresser.component';

describe('AdresserComponent', () => {
  let component: AdresserComponent;
  let fixture: ComponentFixture<AdresserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdresserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
