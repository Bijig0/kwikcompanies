import { ABNProductsQuery, ProductName } from "app/sole-trader/useGetProducts";

const retrievePrice = (products: ABNProductsQuery, productName: ProductName) =>
  products.find(({ name }) => productName === name).prices[0];

export default retrievePrice;
