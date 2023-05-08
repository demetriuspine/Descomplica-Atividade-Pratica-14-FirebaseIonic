import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaveProductPage } from './saveProduct.page';

const routes: Routes = [
  {
    path: '',
    component: SaveProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPageRoutingModule {}
