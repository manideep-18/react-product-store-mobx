import { observable, action, computed } from "mobx";
import { ProductList } from "./productList";

class FilterModel {
  filteredProductList;
  @observable searchText = "";
  @observable inStock = false;
  @action updateSearchText = text => {
    this.searchText = text;
  };
  @action updateInStockStatus = () => {
    this.inStock = !this.inStock;
  };
  @computed get filteredProducts() {
    // console.log("mani", ProductList);
    if (this.inStock) {
      this.filteredProductList = ProductList.filter(
        ProductItem => ProductItem.stocked === false
      );
    }
    if (this.searchText === "") return ProductList;
    else {
      const resultFilteredProducts = this.filteredProductList.map(
        ProductItem => ProductItem.findIndex(this.searchText) !== -1
      );
      return resultFilteredProducts;
    }
  }
}
export default FilterModel;
