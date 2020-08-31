import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorCoreFooterComponent } from './generator-core-footer.component';

describe('GeneratorCoreFooterComponent', () => {
  let component: GeneratorCoreFooterComponent;
  let fixture: ComponentFixture<GeneratorCoreFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorCoreFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorCoreFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
