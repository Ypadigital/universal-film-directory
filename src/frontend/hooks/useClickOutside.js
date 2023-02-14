import { useCallback, useEffect } from "react";

export function useClickOutside(ref, callback) {
  const handleClick = useCallback(
    (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(event);
      }
    },
    [callback, ref]
  );
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);
}
