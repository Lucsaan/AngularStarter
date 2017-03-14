import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacsEditorComponent } from './contacs-editor.component';

describe('ContacsEditorComponent', () => {
  let component: ContacsEditorComponent;
  let fixture: ComponentFixture<ContacsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
