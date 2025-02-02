import { useState, useEffect } from 'react';

import { SEARCH_DEBOUNCE_TIMEOUT } from '@/constants/common';

/**
 * Debounces the input value
 *
 */
const useDebounce = (
  value: string,
  delay = SEARCH_DEBOUNCE_TIMEOUT,
): string => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
