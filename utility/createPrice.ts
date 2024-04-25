import SoleTraderFormValues from "app/sole-trader/soleTraderForm";
import { CreateFormRegisterable } from "app/types/types";
import { Tables } from "app/types/types_db";
import { undefined } from "zod";
import retrievePrice from "./retrievePrice";
import { ABNProductQuery, ProductName } from "./stripe/types";

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

function createPrice<T extends CreateFormRegisterable<SoleTraderFormValues>>(
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

export default createPrice;
