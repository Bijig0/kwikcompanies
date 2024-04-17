import { useQuery } from "@tanstack/react-query";
import { url } from "inspector";
import { z } from "zod";

const businessNameResponseSchema = z.object({});

const url = "https://search.easycompanies.com/abn-activities";

const useSearchForBusinessName = () => {
  const searchForBusinessName = async (): Promise<string[]> => {
    const response = await fetch(url);
    const data = await response.json();
  };

  const result = useQuery({
    queryKey: ["alats"],
    queryFn: getAlatNames,
    enabled: args.enabled,
    gcTime: 0,
  });

  return result;
};

export default useSearchForBusinessName;
