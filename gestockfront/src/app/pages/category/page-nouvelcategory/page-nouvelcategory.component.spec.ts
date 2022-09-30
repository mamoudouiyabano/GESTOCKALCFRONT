import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNouvelcategoryComponent } from './page-nouvelcategory.component';

describe('PageNouvelcategoryComponent', () => {
  let component: PageNouvelcategoryComponent;
  let fixture: ComponentFixture<PageNouvelcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNouvelcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNouvelcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
