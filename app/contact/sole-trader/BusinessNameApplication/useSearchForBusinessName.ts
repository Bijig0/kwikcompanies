import { useQuery } from "@tanstack/react-query";
import { z } from "zod";


const businessNameResponseSchema = z.object({
  success: z.boolean(),
  result: z.object({
    status: z.string(),
    isAcncFlag: z.boolean(),
    reason: z.string(),
    nameSuggestions: z.array(z.string()),
  }),
});

type BusinessNameResponseSchema = z.infer<typeof businessNameResponseSchema>;

const url = "https://search.easycompanies.com/abn-activities";

type Args = {
  shouldSearchBusinessName: boolean;
  businessName: string;
};

const useSearchForBusinessName = ({
  shouldSearchBusinessName,
  businessName,
}: Args) => {
  const searchForBusinessName =
    async (): Promise<BusinessNameResponseSchema> => {
      const response = await fetch(url);
      const data = await response.json();
      const parsedData = businessNameResponseSchema.parse(data);
      return parsedData;
    };

  const result = useQuery({
    queryKey: ["businessName", businessName],
    queryFn: searchForBusinessName,
    enabled: shouldSearchBusinessName,
  });

  return result;
};

export default useSearchForBusinessName;
