import retrievePrice from "@utils/retrievePrice";
import {
  ABNProductQuery,
  ABNProductsQuery,
  ProductName,
} from "@utils/stripe/types";
import { CreateFormRegisterable } from "app/types/types";
import { Tables } from "app/types/types_db";
import { undefined } from "zod";
import SoleTraderFormValues from "./soleTraderForm";

type Price = Tables<"prices">;
type Product = Tables<"products">;

// Type utility to access nested object types
type TypeAtPath<
  T,
  Path extends string
> = Path extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T
    ? TypeAtPath<T[Key], Rest>
    : never
  : Path extends keyof T
  ? T[Path]
  : never;

// Example usage:
type RegistrationPeriodType = TypeAtPath<
  SoleTraderFormValues,
  "businessNameApplication.isRegisteringBusinessName.registrationPeriod"
>;

function getValueByPath(obj, path) {
  return path.split(".").reduce((current, key) => current && current[key], obj);
}

function createPriceType<
  T extends CreateFormRegisterable<SoleTraderFormValues>
>(
  formValues: SoleTraderFormValues,
  products: ABNProductQuery[],
  field: T,
  predicate: TypeAtPath<SoleTraderFormValues, T>,
  productName: ProductName
): Price | undefined {
  return getValueByPath(formValues, field) === predicate
    ? retrievePrice(products, productName)
    : undefined;
}

const findSoleTraderPrices = (
  data: SoleTraderFormValues,
  products: ABNProductsQuery
): Price[] => {
  const priceTypes: (Price | undefined)[] = [
    retrievePrice(products, "Sole Trader ABN Registration"),
    createPriceType(
      data,
      products,
      "gstRegistration.registerForGst",
      true,
      "GST Registration"
    ),
    createPriceType(
      data,
      products,
      "businessNameApplication.isRegisteringBusinessName.registrationPeriod",
      "3 years",
      "3 Years Business Name Registration"
    ),
    createPriceType(
      data,
      products,
      "businessNameApplication.isRegisteringBusinessName.registrationPeriod",
      "1 year",
      "1 year Business Name Registration"
    ),
  ];

  const filteredByUndefined = priceTypes.filter(
    (priceType) => priceType !== undefined
  );

  return filteredByUndefined;
};

export default findSoleTraderPrices;
