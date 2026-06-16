import { useCallback, useState } from "react";

export function useToggle(initialValue = false) {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(() => {
    setValue((current) => !current);
  }, []);

  return { value, toggle, setValue };
}
