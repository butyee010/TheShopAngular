import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminatePageComponent } from './terminate-page.component';

describe('TerminatePageComponent', () => {
  let component: TerminatePageComponent;
  let fixture: ComponentFixture<TerminatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
