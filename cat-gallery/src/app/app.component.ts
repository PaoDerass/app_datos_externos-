import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cat-gallery',
  imports: [RouterOutlet],
  
  templateUrl: '../app/components/cat-gallery/cat-gallery.component.html',
  styleUrls: ['../app/components/cat-gallery/cat-gallery.component.scss']
})
export class AppComponent {
  title = 'cat-gallery';
}
