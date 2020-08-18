import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorWelcomeComponent } from './generator-welcome.component';

describe('GeneratorWelcomeComponent', () => {
  let component: GeneratorWelcomeComponent;
  let fixture: ComponentFixture<GeneratorWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
