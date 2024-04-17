import { useQuery } from "@tanstack/react-query";
import createSearchForBusinessUrl from "app/contact/createSearchForBusinessUrl/createSearchForBusinessUrl";
import { z } from "zod";

export const KNOWN_STATUSES = [
  "available",
  "for manual review",
  "identical",
] as const;

export type KNOWN_STATUS = (typeof KNOWN_STATUSES)[number];

const businessNameSuccessResponseSchema = z.object({
  success: z.boolean(),
  result: z.object({
    status: z.boolean(),
    isAcncFlag: z.boolean(),
    reason: z.enum(KNOWN_STATUSES),
  }),
});

const businessNameFailureResponseSchema = z.object({
  success: z.literal(false),
  result: z.object({
    status: z.string(),
    reason: z.string(),
  }),
});

const businessNameResponseSchema = z.union([
  businessNameSuccessResponseSchema,
  businessNameFailureResponseSchema,
]);

type BusinessNameResponseSchema = z.infer<typeof businessNameResponseSchema>;

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
      const url = createSearchForBusinessUrl(businessName);
      const response = await fetch(url);
      const data = await response.json();
      const parsedData = businessNameResponseSchema.parse(data);
      if (!parsedData.success) {
        throw new Error(parsedData.result.reason);
      }
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