import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteAuthorListComponent } from './favourite-author-list.component';

describe('FavouriteAuthorListComponent', () => {
  let component: FavouriteAuthorListComponent;
  let fixture: ComponentFixture<FavouriteAuthorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteAuthorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteAuthorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
