import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnDesarrolloComponent } from './en-desarrollo.component';

describe('EnDesarrolloComponent', () => {
  let component: EnDesarrolloComponent;
  let fixture: ComponentFixture<EnDesarrolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnDesarrolloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnDesarrolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
