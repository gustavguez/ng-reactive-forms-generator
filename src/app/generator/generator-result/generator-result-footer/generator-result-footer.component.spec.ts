import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorResultFooterComponent } from './generator-result-footer.component';

describe('GeneratorResultFooterComponent', () => {
  let component: GeneratorResultFooterComponent;
  let fixture: ComponentFixture<GeneratorResultFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorResultFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorResultFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
