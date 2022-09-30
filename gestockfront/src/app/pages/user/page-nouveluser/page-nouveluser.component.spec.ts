import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNouveluserComponent } from './page-nouveluser.component';

describe('PageNouveluserComponent', () => {
  let component: PageNouveluserComponent;
  let fixture: ComponentFixture<PageNouveluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNouveluserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNouveluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
