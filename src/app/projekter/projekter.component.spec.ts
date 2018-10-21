import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjekterComponent } from './projekter.component';

describe('ProjekterComponent', () => {
  let component: ProjekterComponent;
  let fixture: ComponentFixture<ProjekterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjekterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjekterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
