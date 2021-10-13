import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/productEntity';
import { ProductService } from '../../services/product.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: []
})
export class ProductComponent implements OnInit {

	constructor(public productService: ProductService) { }

	public productData: Product[] | undefined;
	public name: string | undefined;
	public description: string | undefined;
	public price: string | undefined;
	public id: number | undefined;

	ngOnInit(): void {
		this.load();
	}

	load() {
		this.productData = [];
		this.productService.getFindAll().subscribe(x => {
			this.productData = x;
		});
	}

	save() {
		let product: Product = new Product();
		product.name = this.name;
		product.description = this.description;
		product.price = this.price;

		this.productService.postSave(product).subscribe(x => {
			this.load();
			this.clear();
		});
	}

	delete(id:any) {
		this.productService.deletePoduct(id).subscribe(x => {
			this.load();
			this.clear();
		});
	}
	loadData(product: Product) {
		this.name = product.name;
		this.description = product.description;
		this.price = product.price;
		this.id = product.id;
		
	}
	update() {
		let product: Product = new Product();
		product.id = this.id;
		product.name = this.name;
		product.description = this.description;
		product.price = this.price;
		
		this.productService.postSave(product).subscribe(x => {
			this.load();
			this.clear();
		});
		
	}
	clear() {
		this.name = "";
		this.description = "";
		this.price = "";
		this.id = 0;
	}

}
