import { QueryData } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";

import { createClient } from "@utils/supabase/client";
import { z } from "zod";

const productNames = [
  "Sole Trader ABN Registration",
  "Partnership ABN Registration",
] as const;

type ProductName = (typeof productNames)[number];

const productNameSchema = z.enum(productNames);

const productsQuery = createClient()
  .from("products")
  .select("*, prices(*)")
  .eq("active", true)
  .eq("prices.active", true)
  .order("metadata->index")
  .order("unit_amount", { referencedTable: "prices" });

type ABNProductsQuery = (Omit<QueryData<typeof productsQuery>[0], "name"> & {
  name: ProductName;
})[];

const useGetSoleTraderProducts = () => {
  const getSoleTraderProducts = async (): Promise<ABNProductsQuery> => {
    const supabase = createClient();
    const { data: products, error } = await productsQuery;

    if (error) throw error;

    const assertProductNames = () => {
      for (const product of products) {
        productNameSchema.parse(product.name);
      }
    };

    assertProductNames();

    const parsedProducts = products as ABNProductsQuery;

    return parsedProducts;
  };

  const result = useQuery({
    queryFn: getSoleTraderProducts,
    queryKey: ["soleTraderProducts"],
  });
  return result;
};

export default useGetSoleTraderProducts;
