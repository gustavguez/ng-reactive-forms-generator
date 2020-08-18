import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorStartFormComponent } from './generator-start-form.component';

describe('GeneratorStartFormComponent', () => {
  let component: GeneratorStartFormComponent;
  let fixture: ComponentFixture<GeneratorStartFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorStartFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorStartFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
