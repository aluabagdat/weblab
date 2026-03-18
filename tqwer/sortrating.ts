sortByRating() {
  this.products.sort((a, b) => b.rating! - a.rating!);
}