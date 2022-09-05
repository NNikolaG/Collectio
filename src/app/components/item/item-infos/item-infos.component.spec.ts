import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInfosComponent } from './item-infos.component';

describe('ItemInfosComponent', () => {
  let component: ItemInfosComponent;
  let fixture: ComponentFixture<ItemInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
