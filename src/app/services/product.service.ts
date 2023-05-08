import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { IProduct } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private dbPath = '/products';
  productListRef: AngularFireList<IProduct>;

  constructor(private db: AngularFireDatabase) {
    this.productListRef = db.list(this.dbPath);
  }

  // Create
  createProduct(apt: IProduct) {
    return this.productListRef.push({
      name: apt.name,
      description: apt.description,
      price: apt.price
    })
  }

  // Get Single
  getProduct(id: string) {
    const productRef: AngularFireObject<IProduct> = this.db.object('/products/' + id);
    return productRef;
  }

  // Get List
  getProductList() {
    this.productListRef = this.db.list('/products');
    return this.productListRef;
  }

  // Update
  updateProduct(id: any, apt: IProduct) {
    const productRef: AngularFireObject<IProduct> = this.db.object('/products/' + id);
    return productRef.update({
      name: apt.name,
      description: apt.description,
      price: apt.price
    })
  }

  // Delete
  deleteProduct(id: string) {
    const productRef: AngularFireObject<IProduct> = this.db.object('/products/' + id);
    productRef.remove();
  }
}
