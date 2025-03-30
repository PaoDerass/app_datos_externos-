import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatGalleryComponent } from './cat-gallery.component';

describe('CatGalleryComponent', () => {
  let component: CatGalleryComponent;
  let fixture: ComponentFixture<CatGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
