import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpartDdMenuComponent } from './webpart-dd-menu.component';

describe('WebpartDdMenuComponent', () => {
  let component: WebpartDdMenuComponent;
  let fixture: ComponentFixture<WebpartDdMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebpartDdMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebpartDdMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
