import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorCoreComponent } from './generator-core.component';

describe('GeneratorCoreComponent', () => {
  let component: GeneratorCoreComponent;
  let fixture: ComponentFixture<GeneratorCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
