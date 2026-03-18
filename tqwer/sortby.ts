sortByPriceAsc() {
  this.products.sort((a, b) => a.price! - b.price!);
}
sortByLikes() {
  this.products.sort((a, b) => b.likes - a.likes);
}
reset() {
  this.products = PRODUCTS;
}