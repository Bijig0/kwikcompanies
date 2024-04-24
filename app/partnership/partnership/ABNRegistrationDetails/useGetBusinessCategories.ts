import { useQuery } from "@tanstack/react-query";
import createBusinessCategoryFinderURL from "app/company/createBusinessCategoryFinderUrl/createBusinessCategoryFinderURL";
import { z } from "zod";

const businessActivitySchema = z.object({
  activity_id: z.string(),
  description: z.string(),
  bic_code: z.string(),
  business_industry: z.string(),
  anzsic_code: z.string(),
  anzsic_code_description: z.string(),
  main_industry_code: z.string(),
  main_industry: z.string(),
});

const businessActivitesSchema = z.array(businessActivitySchema);

export type BusinessActivitySchema = z.infer<typeof businessActivitySchema>;

export type BusinessActivitesSchema = z.infer<typeof businessActivitesSchema>;

type Args = {
  enabled: boolean;
  businessActivity: string;
};

const useGetBusinessCategories = (args: Args) => {
  const { enabled, businessActivity } = args;
  const getBusinessCategory = async (): Promise<BusinessActivitesSchema> => {
    const url = createBusinessCategoryFinderURL(businessActivity);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const parsedData = businessActivitesSchema.parse(data);
    console.log(parsedData);
    return parsedData;
  };

  const result = useQuery({
    queryKey: ["getBusinessCategories", businessActivity],
    queryFn: getBusinessCategory,
    enabled: enabled,
    retry: false,
    
  });

  return result;
};

export default useGetBusinessCategories;
