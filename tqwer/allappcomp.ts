get filteredProducts(): Product[] {
  if (this.selectedCategoryId === 0) {
    return this.products; // показываем ВСЕ
  }

  return this.products.filter(
    p => p.categoryId === this.selectedCategoryId
  );
}