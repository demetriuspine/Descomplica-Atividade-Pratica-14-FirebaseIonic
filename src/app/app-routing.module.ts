import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'save',
    loadChildren: () => import('./save-product/save-product.module').then(m => m.ModalPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./list-products/list-products.module').then(m => m.ListProductsPageModule)
  },
  {
    path: 'products/:id',
    loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
