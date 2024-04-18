import { useBoolean } from "@utils/useBoolean";
import { useEffect } from "react";
import { queryClient } from "../queryClient";

type Args = {
  stopShouldSearchBusinessName: () => void;
};

const useResetSearch = ({ stopShouldSearchBusinessName }: Args) => {
  const { value: shouldReset, setTrue: startShouldReset } = useBoolean(false);
  const resetSearch = () => {
    stopShouldSearchBusinessName();
    startShouldReset();
  };
  useEffect(() => {
    if (shouldReset) {
      queryClient.resetQueries({ queryKey: ["search"] });
    }
    return () => {};
  }, [shouldReset]);

  return { resetSearch };
};

export default useResetSearch;
