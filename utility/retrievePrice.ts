import { ABNProductsQuery, ProductName } from "./stripe/types";

const retrievePrice = (products: ABNProductsQuery, productName: ProductName) =>
  products.find(({ name }) => productName === name).prices[0];

export default retrievePrice;
