import classNames from 'classnames';
import { lazy, startTransition, useCallback, useMemo, useState } from 'react';

import {
  DEFAULT_PAGE_START,
  DEFAULT_IMAGE_SKELETON_COUNT,
} from '@/constants/common';

import useFetchImages from '@/hooks/useFetchImages';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

import { ImageSkeleton } from '@/components/Skeleton';
import EmptyList from '@/components/ImageList/EmptyList';

const ImageCard = lazy(() => import('@/components/ImageList/ImageCard'));

interface ImageListProps {
  text: string;
}

const ImageList = (props: ImageListProps) => {
  const { text } = props;

  const [page, setPage] = useState(DEFAULT_PAGE_START);

  const { isLoading, data: images, hasMore } = useFetchImages(page);

  const fetchNextPage = useCallback(() => {
    if (hasMore && !isLoading) {
      startTransition(() => {
        setPage((prevPage) => prevPage + 1);
      });
    }
  }, [hasMore, isLoading, setPage]);

  const lastElementRef = useInfiniteScroll(fetchNextPage, isLoading, hasMore, {
    threshold: 0.1,
    rootMargin: '50px',
  });

  const filteredImages = useMemo(() => {
    if (!text.trim()) {
      return images;
    }

    const newImages = images.filter(({ author }) =>
      author.toLowerCase().includes(text.toLowerCase()),
    );

    return newImages;
  }, [text, images]);

  const lastImageIndex = images.length - 1;

  if (!isLoading && !filteredImages.length) {
    return <EmptyList />;
  }

  return (
    <div>
      <div
        className={classNames('max-w-6xl mx-auto layout-grid', {
          'my-6': !!filteredImages.length,
        })}
      >
        {filteredImages.map((image, index) => (
          <a
            key={image.url}
            className="fade-in"
            ref={index === lastImageIndex ? lastElementRef : null}
            target="_blank"
            href={image.url}
            rel="noreferrer"
          >
            <ImageCard image={image} />
          </a>
        ))}
      </div>

      {isLoading && (
        <div className="max-w-6xl mx-auto layout-grid my-6">
          {[...Array(DEFAULT_IMAGE_SKELETON_COUNT)].map((_, index) => (
            <ImageSkeleton key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageList;
