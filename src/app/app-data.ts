import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ProductData } from './products-rxjs/products/product-data';
import { ProductCategoryData } from './products-rxjs/product-categories/product-category-data';
import { SupplierData } from './products-rxjs/suppliers/supplier-data';

export class AppData implements InMemoryDbService {

  createDb() {
    const products = ProductData.products;
    const productCategories = ProductCategoryData.categories;
    const suppliers = SupplierData.suppliers;
    return { products, productCategories, suppliers };
  }
}
