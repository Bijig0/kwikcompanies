import { QueryData } from "@supabase/supabase-js";
import { createClient } from "@utils/supabase/client";
import { z } from "zod";

export const productNames = [
  "Sole Trader ABN Registration",
  "Partnership ABN Registration",
  "GST Registration",
  "1 year Business Name Registration",
  "3 Years Business Name Registration",
] as const;

export type ProductName = (typeof productNames)[number];

export const productNameSchema = z.enum(productNames);

export const productsQuery = createClient()
  .from("products")
  .select("*, prices(*)")
  .eq("active", true)
  .eq("prices.active", true)
  .order("metadata->index")
  .order("unit_amount", { referencedTable: "prices" });

export type ABNProductQuery = Omit<
  QueryData<typeof productsQuery>[0],
  "name"
> & {
  name: ProductName;
};

export type ABNProductsQuery = ABNProductQuery[];
