import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorFormInputComponent } from './generator-form-input.component';

describe('GeneratorFormInputComponent', () => {
  let component: GeneratorFormInputComponent;
  let fixture: ComponentFixture<GeneratorFormInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorFormInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
