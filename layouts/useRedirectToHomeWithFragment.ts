import { useRouter } from "next/navigation";
import { useEffect } from "react";

function useRedirectToHomeWithFragment(fragment) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeComplete = (url) => {
      if (url === "/") {
        // Append the hash and text fragment once on the homepage
        window.location.hash = fragment;
      }
    };

    // Listen to when the route change is complete
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    // Navigate to the homepage
    router.push("/");

    // Cleanup the event listener when the component unmounts or fragment changes
    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [fragment, router]); // Re-run the effect if the fragment or router changes
}

export default useRedirectToHomeWithFragment;
