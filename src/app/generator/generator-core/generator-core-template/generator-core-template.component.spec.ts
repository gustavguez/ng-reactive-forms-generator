import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorCoreTemplateComponent } from './generator-core-template.component';

describe('GeneratorCoreTemplateComponent', () => {
  let component: GeneratorCoreTemplateComponent;
  let fixture: ComponentFixture<GeneratorCoreTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorCoreTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorCoreTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
