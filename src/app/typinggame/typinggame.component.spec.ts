import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypinggameComponent } from './typinggame.component';

describe('TypinggameComponent', () => {
  let component: TypinggameComponent;
  let fixture: ComponentFixture<TypinggameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypinggameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypinggameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
