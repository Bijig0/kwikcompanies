import { useQuery } from "@tanstack/react-query";
import {
  ABNProductsQuery,
  productNameSchema,
  productsQuery,
} from "@utils/stripe/types";

import { createClient } from "@utils/supabase/client";

const useGetProducts = () => {
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

    console.log(products);

    const parsedProducts = products as ABNProductsQuery;

    return parsedProducts;
  };

  const result = useQuery({
    queryFn: getSoleTraderProducts,
    queryKey: ["soleTraderProducts"],
  });
  return result;
};

export default useGetProducts;
