import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNouvelitemsComponent } from './page-nouvelitems.component';

describe('PageNouvelitemsComponent', () => {
  let component: PageNouvelitemsComponent;
  let fixture: ComponentFixture<PageNouvelitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNouvelitemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNouvelitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
