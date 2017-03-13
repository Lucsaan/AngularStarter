import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacsDetailComponent } from './contacs-detail.component';

describe('ContacsDetailComponent', () => {
  let component: ContacsDetailComponent;
  let fixture: ComponentFixture<ContacsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
