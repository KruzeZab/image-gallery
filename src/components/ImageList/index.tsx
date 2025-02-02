import { lazy, useCallback, useState } from 'react';

import {
  DEFAULT_PAGE_START,
  DEFAULT_IMAGE_SKELETON_COUNT,
} from '@/constants/common';

import useFetchImages from '@/hooks/useFetchImages';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

import { ImageSkeleton } from '@/components/Skeleton';

const ImageCard = lazy(() => import('@/components/ImageList/ImageCard'));

const ImageList = () => {
  const [page, setPage] = useState(DEFAULT_PAGE_START);

  const { isLoading, data: images, hasMore } = useFetchImages(page);

  const fetchNextPage = useCallback(() => {
    if (hasMore && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [hasMore, isLoading, setPage]);

  const lastElementRef = useInfiniteScroll(fetchNextPage, isLoading, hasMore, {
    threshold: 0.1,
    rootMargin: '50px',
  });

  const lastImageIndex = images.length - 1;

  return (
    <div>
      {!!images.length && (
        <div className="max-w-6xl mx-auto layout-grid my-8">
          {images.map((image, index) => (
            <div
              key={image.download_url}
              className="fade-in"
              ref={index === lastImageIndex ? lastElementRef : null}
            >
              <ImageCard image={image} />
            </div>
          ))}
        </div>
      )}

      {isLoading && (
        <div className="max-w-6xl mx-auto layout-grid my-8">
          {[...Array(DEFAULT_IMAGE_SKELETON_COUNT)].map((_, index) => (
            <ImageSkeleton key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageList;
