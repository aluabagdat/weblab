get filteredProducts(): Product[] {
  let filtered = this.products;

  if (this.selectedCategoryId && this.selectedCategoryId !== 0) {
    filtered = filtered.filter(
      p => p.categoryId === this.selectedCategoryId
    );
  }

  if (this.searchText.trim()) {
    filtered = filtered.filter(
      p => p.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  return filtered;
}