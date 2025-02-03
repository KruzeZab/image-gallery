import axios from 'axios';
import { useEffect, useState } from 'react';

import { Image } from '@/interfaces/picsum';

import fetchImages from '@/utils/services/picsum';

import { DEFAULT_PAGE_LIMIT } from '@/constants/common';

/**
 * Fetch photos from Picsum API
 * with cancel token from axios
 *
 */
const useFetchImages = (page: number, limit = DEFAULT_PAGE_LIMIT) => {
  const [data, setData] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getImages = async () => {
      setIsLoading(true);
      setError(null);

      let isCanceled = false;

      try {
        const params = { page, limit };

        const fetchedImages = await fetchImages(params, signal);

        if (isCanceled) {
          return;
        }

        if (!fetchedImages.length || fetchedImages.length < limit) {
          setHasMore(false);
        } else {
          setData((prevImages) => [...prevImages, ...fetchedImages]);
        }
      } catch (err) {
        if (axios.isCancel(err)) {
          isCanceled = true;
        }

        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        if (!isCanceled) {
          setIsLoading(false);
        }
      }
    };

    getImages();

    return () => controller.abort();
  }, [page, limit, setError, setData, setHasMore]);

  return { data, isLoading, error, hasMore };
};

export default useFetchImages;
