import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { Cat, Breed } from '../../models/cat.model';

@Component({
  selector: 'app-cat-gallery',
  templateUrl: './cat-gallery.component.html',
  styleUrls: ['./cat-gallery.component.scss']
})
export class CatGalleryComponent implements OnInit {
  cats: Cat[] = [];
  breeds: Breed[] = [];
  selectedBreed: string = '';

  constructor(private catService: CatService) {}

  ngOnInit() {
    this.loadCats();
    this.loadBreeds();
  }

  loadCats() {
    this.catService.getRandomCats(12).subscribe(data => {
      this.cats = data;
    });
  }

  loadBreeds() {
    this.catService.getBreeds().subscribe(data => {
      this.breeds = data;
    });
  }

  filterByBreed() {
    if (this.selectedBreed) {
      this.catService.getRandomCats(12).subscribe(data => {
        this.cats = data.filter((cat: Cat) => 
          cat.breeds.some((b: Breed) => b.id === this.selectedBreed)
        );
      });
    } else {
      this.loadCats();
    }
  }
}
