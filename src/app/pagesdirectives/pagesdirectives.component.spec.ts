import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesdirectivesComponent } from './pagesdirectives.component';

describe('PagesdirectivesComponent', () => {
  let component: PagesdirectivesComponent;
  let fixture: ComponentFixture<PagesdirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesdirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesdirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
