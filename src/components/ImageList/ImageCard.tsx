import { useCallback, useState } from 'react';

import { Image } from '@/interfaces/picsum';

import { ImageSkeleton } from '@/components/Skeleton';

interface ImageCardProps {
  image: Image;
}

const ImageCard = (props: ImageCardProps) => {
  const { image } = props;

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = useCallback(() => {
    setIsImageLoaded(true);
  }, [setIsImageLoaded]);

  return (
    <div className="card group transition-linear-slow overflow-hidden">
      <div className="h-[200px] overflow-hidden relative">
        {!isImageLoaded && <ImageSkeleton />}

        <img
          src={image.download_url}
          alt={image.author}
          className="card-image group-hover:scale-105 transition-linear-slow"
          onLoad={handleImageLoad}
        />
      </div>
      <div className="p-2 py-3">
        <h4 className="group-hover:text-gray-600 group-hover:dark:text-gray-400">
          {image.author}
        </h4>
      </div>
    </div>
  );
};

export default ImageCard;
