import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlamComponent } from './plam.component';

describe('PlamComponent', () => {
  let component: PlamComponent;
  let fixture: ComponentFixture<PlamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
