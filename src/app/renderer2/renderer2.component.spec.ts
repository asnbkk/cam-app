import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Renderer2Component } from './renderer2.component';

describe('Renderer2Component', () => {
  let component: Renderer2Component;
  let fixture: ComponentFixture<Renderer2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Renderer2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Renderer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
