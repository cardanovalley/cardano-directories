import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYourStoreComponent } from './add-your-store.component';

describe('AddYourStoreComponent', () => {
  let component: AddYourStoreComponent;
  let fixture: ComponentFixture<AddYourStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddYourStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddYourStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
