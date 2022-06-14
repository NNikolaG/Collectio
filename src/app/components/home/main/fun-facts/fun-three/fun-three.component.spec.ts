import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunThreeComponent } from './fun-three.component';

describe('FunThreeComponent', () => {
  let component: FunThreeComponent;
  let fixture: ComponentFixture<FunThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
