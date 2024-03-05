import { Component } from '@angular/core';
import { ArticleBoxComponent } from '../article-box/article-box.component';
import { IArticlePanier } from '../iarticle-panier';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ArticleBoxComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
