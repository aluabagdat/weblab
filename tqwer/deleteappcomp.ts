removeProduct(id: number) {
  this.products = this.products.filter(p => p.id !== id);
}