import { useRef, useCallback } from 'react';

/**
 * Hook for infinite scroll
 *
 */
const useInfiniteScroll = (
  callback: () => void,
  isLoading: boolean,
  hasMore: boolean,
  options = {},
) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (isLoading) {
        return;
      }

      if (observer.current) {
        observer.current.disconnect();
      }

      if (node) {
        observer.current = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting && hasMore) {
              callback();
            }
          },
          {
            ...options,
          },
        );

        observer.current.observe(node);
      }
    },
    [isLoading, hasMore, callback],
  );

  return lastElementRef;
};

export default useInfiniteScroll;
