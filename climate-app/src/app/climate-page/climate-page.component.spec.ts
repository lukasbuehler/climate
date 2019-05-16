import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimatePageComponent } from './climate-page.component';

describe('ClimatePageComponent', () => {
  let component: ClimatePageComponent;
  let fixture: ComponentFixture<ClimatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
