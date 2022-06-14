import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FungusTableComponent } from './fungus-table.component';

describe('FungusTableComponent', () => {
  let component: FungusTableComponent;
  let fixture: ComponentFixture<FungusTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FungusTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FungusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
