import { useEffect, useState } from "react";

export function useArmed(delay = 600): boolean {
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setArmed(true), delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return armed;
}
