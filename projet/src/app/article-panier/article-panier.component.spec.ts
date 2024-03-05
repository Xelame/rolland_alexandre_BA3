import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePanierComponent } from './article-panier.component';

describe('ArticlePanierComponent', () => {
  let component: ArticlePanierComponent;
  let fixture: ComponentFixture<ArticlePanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlePanierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticlePanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
