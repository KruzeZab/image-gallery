import { MdSearch } from 'react-icons/md';

import TextInput from '@/components/common/TextInput';

interface SearchboxProps {
  searchTerm: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Searchbox = (props: SearchboxProps) => {
  const { searchTerm, handleSearch } = props;

  return (
    <div className="max-w-2xl mx-auto">
      <TextInput
        type="text"
        placeholder="Search by author..."
        required
        startIcon={
          <MdSearch
            fontSize={21}
            className="text-gray-600 dark:text-gray-300"
          />
        }
        value={searchTerm}
        onChange={handleSearch}
        className="p-2 pl-10"
      />
    </div>
  );
};

export default Searchbox;
