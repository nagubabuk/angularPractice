import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Appservice{
    private products = [
        { id: 1, name: 'Product A' },
        { id: 2, name: 'Product B' },
        { id: 3, name: 'Product C' }
    ];

    constructor() { }

    getProducts() {
        return this.products;
    }

    getProductById(id: number) {
        return this.products.find(product => product.id === id);
    }
}