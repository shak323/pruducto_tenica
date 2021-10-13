import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Utils } from '../common/util'
import { Product } from '../models/productEntity';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	
	
	private path = Utils.url + "product/"
	
	constructor(private http: HttpClient) { }

	getFindAll(): Observable<Product[]> {
		return this.http.get<Product[]>(this.path + 'findAll');
	}

	postSave(product:Product): Observable<Product> {
		return this.http.post<Product>(this.path + 'save', product);
	}

	deletePoduct(id: number): Observable<any> {
		return this.http.delete<any>(this.path + 'deleteById?Id=' + id);
	}
}
