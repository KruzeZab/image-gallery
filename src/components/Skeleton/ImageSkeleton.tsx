const ImageSkeleton = () => {
  return (
    <div className="bg-gray-200 rounded-lg shadow animate-pulse">
      <div className="h-[200px] bg-gray-300 rounded-t-lg" />
      <div className="p-2">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
      </div>
    </div>
  );
};

export default ImageSkeleton;
