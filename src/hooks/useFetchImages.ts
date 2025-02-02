import { useEffect, useState } from 'react';

import { Image } from '@/interfaces/picsum';

import fetchImages from '@/utils/services/picsum';

import { DEFAULT_PAGE_LIMIT } from '@/constants/common';

/**
 * Fetch photos from Picsum API
 *
 */
const useFetchImages = (page: number, limit = DEFAULT_PAGE_LIMIT) => {
  const [data, setData] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const getImages = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const params = { page, limit };

        const fetchedImages = await fetchImages(params);

        if (!fetchedImages.length || fetchedImages.length < limit) {
          setHasMore(false);
        } else {
          setData((prevImages) => [...prevImages, ...fetchedImages]);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [page, limit]);

  return { data, isLoading, error, hasMore };
};

export default useFetchImages;
