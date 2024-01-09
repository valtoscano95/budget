import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { categories } from '../data/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  //http request

  getCategories():Category[]{
    const categoryArray = categories;
    return categoryArray
  }

  constructor() { }
}
