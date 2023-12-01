import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorScrollComponent } from './sponsor-scroll.component';

describe('SponsorScrollComponent', () => {
  let component: SponsorScrollComponent;
  let fixture: ComponentFixture<SponsorScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
