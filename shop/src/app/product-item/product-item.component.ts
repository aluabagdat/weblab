import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html'
})
export class ProductItemComponent {

  @Input() product!: Product;
  @Output() delete = new EventEmitter<Product>();

  like() {
    this.product.likes++;
  }

  remove() {
    this.delete.emit(this.product);
  }

  share() {
  const text = encodeURIComponent(`Посмотрите на товар: ${this.product.name}`);
  const url = encodeURIComponent(this.product.link); 
  const whatsappUrl = `https://wa.me/?text=${text}%20${url}`;
  window.open(whatsappUrl, '_blank');

}

}