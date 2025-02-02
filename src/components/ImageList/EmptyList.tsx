import { FiImage } from 'react-icons/fi';

const EmptyList = () => {
  return (
    <div className="max-w-6xl mx-auto text-center mt-8 rounded-lg p-38 bg-white">
      <div className="flex flex-col items-center">
        <FiImage className="text-gray-500 text-6xl mb-2" />
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
          No Image Found
        </h2>
        <p className="text-gray-600 mt-3">
          Try adjusting your filters or check back later.
        </p>
      </div>
    </div>
  );
};

export default EmptyList;
