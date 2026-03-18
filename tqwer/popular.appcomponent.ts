get mostLikedProduct(): Product | undefined {
  return this.products.reduce((prev, current) =>
    prev.likes > current.likes ? prev : current
  );
}