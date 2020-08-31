import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorResultComponent } from './generator-result.component';

describe('GeneratorResultComponent', () => {
  let component: GeneratorResultComponent;
  let fixture: ComponentFixture<GeneratorResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
