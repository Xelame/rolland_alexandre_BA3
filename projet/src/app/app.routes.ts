import { Routes } from '@angular/router';
import { ArticleBoxComponent } from './article-box/article-box.component';
import { ArticlePanierComponent } from './article-panier/article-panier.component';
import { FormCheckoutComponent } from './form-checkout/form-checkout.component';

export const routes: Routes = [
    { path: '', component: ArticleBoxComponent },
    { path: 'cart', component: ArticlePanierComponent },
    { path: 'checkout', component: FormCheckoutComponent },
    { path: '**', redirectTo: ''}
];
