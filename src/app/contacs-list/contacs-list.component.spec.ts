import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacsListComponent } from './contacs-list.component';

describe('ContacsListComponent', () => {
  let component: ContacsListComponent;
  let fixture: ComponentFixture<ContacsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
