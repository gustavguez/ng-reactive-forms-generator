import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorCoreFormComponent } from './generator-core-form.component';

describe('GeneratorCoreFormComponent', () => {
  let component: GeneratorCoreFormComponent;
  let fixture: ComponentFixture<GeneratorCoreFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorCoreFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorCoreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
