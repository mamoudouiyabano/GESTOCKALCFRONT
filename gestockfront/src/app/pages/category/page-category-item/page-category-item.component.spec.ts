import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCategoryItemComponent } from './page-category-item.component';

describe('PageCategoryItemComponent', () => {
  let component: PageCategoryItemComponent;
  let fixture: ComponentFixture<PageCategoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCategoryItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCategoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
