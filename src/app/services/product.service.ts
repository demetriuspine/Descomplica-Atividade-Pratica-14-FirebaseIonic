import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { IProduct } from '../models/product.interface';
import { Observable } from 'rxjs';

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
  getProduct(id: string): Observable<IProduct | null> {
    const productRef: AngularFireObject<IProduct> = this.db.object('/products/' + id);
    return productRef.valueChanges();
  }

  // Get List
  getProductList() {
    this.productListRef = this.db.list<IProduct>('/products');
    return this.productListRef.snapshotChanges();
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
