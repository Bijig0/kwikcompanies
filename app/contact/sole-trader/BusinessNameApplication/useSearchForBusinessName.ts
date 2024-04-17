import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

export const KNOWN_STATUSES = [
  "available",
  "for manual review",
  "identical",
] as const;

export type KNOWN_STATUS = (typeof KNOWN_STATUSES)[number];

const businessNameResponseSchema = z.object({
  success: z.boolean(),
  result: z.object({
    status: z.boolean(),
    isAcncFlag: z.boolean(),
    reason: z.enum(KNOWN_STATUSES),
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
