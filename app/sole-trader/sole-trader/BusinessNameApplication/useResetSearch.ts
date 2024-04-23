import { useBoolean } from "@utils/useBoolean";
import { useSoleTraderFormContext } from "app/sole-trader/SoleTraderFormContext";
import { useEffect } from "react";
import { queryClient } from "../queryClient";

type Args = {
  stopShouldSearchBusinessName: () => void;
};

const useResetSearch = ({ stopShouldSearchBusinessName }: Args) => {
  const {
    formManager: { setValue },
  } = useSoleTraderFormContext();
  const { value: shouldReset, setTrue: startShouldReset } = useBoolean(false);
  const resetSearch = () => {
    stopShouldSearchBusinessName();
    setValue("businessNameApplication.businessName.businessName", "");
    startShouldReset();
  };
  // This effect is needed because the search query must first be disabled
  // (stopShouldSearchBusinessName) before the reset query can be run
  // otherwise resetQueries will run while the search query is still enabled
  // and then another query will re-run
  useEffect(() => {
    if (shouldReset) {
      queryClient.resetQueries({ queryKey: ["search"] });
    }
  }, [shouldReset]);

  return { resetSearch };
};

export default useResetSearch;
