import { FiImage } from 'react-icons/fi';

const EmptyList = () => {
  return (
    <div className="max-w-6xl mx-auto text-center mt-6 lg:mt-8 rounded-lg py-38 bg-white dark:bg-gray-800">
      <div className="flex flex-col items-center">
        <FiImage className="text-gray-500 text-6xl mb-2 dark:text-gray-300" />
        <h2 className="sm:text-2xl font-semibold text-gray-700 dark:text-gray-200">
          No Image Found
        </h2>
        <p className="text-gray-600 mt-3 hidden md:block text-sm lg:text-base dark:text-gray-300 tracking-wide">
          Try adjusting your filters or check back later.
        </p>
      </div>
    </div>
  );
};

export default EmptyList;
