import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightboxFooterComponent } from './lightbox-footer.component';

describe('LightboxFooterComponent', () => {
  let component: LightboxFooterComponent;
  let fixture: ComponentFixture<LightboxFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightboxFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightboxFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
