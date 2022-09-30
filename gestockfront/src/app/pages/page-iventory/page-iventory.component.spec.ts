import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIventoryComponent } from './page-iventory.component';

describe('PageIventoryComponent', () => {
  let component: PageIventoryComponent;
  let fixture: ComponentFixture<PageIventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageIventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageIventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
