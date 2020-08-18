import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorFormComponent } from './generator-form.component';

describe('GeneratorFormComponent', () => {
  let component: GeneratorFormComponent;
  let fixture: ComponentFixture<GeneratorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
