import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FungusDetailsComponent } from './fungus-details.component';

describe('FungusDetailsComponent', () => {
  let component: FungusDetailsComponent;
  let fixture: ComponentFixture<FungusDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FungusDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FungusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
