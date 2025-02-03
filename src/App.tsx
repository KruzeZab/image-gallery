import { useState } from 'react';

import useDebounce from '@/hooks/useDebounce';

import Header from '@/components/Header';
import ImageList from '@/components/ImageList';
import Searchbox from './components/Searchbox';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedText = useDebounce(searchTerm);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto pt-10 lg:pt-14 px-2 lg:px-0">
        {/* Search Box */}
        <Searchbox searchTerm={searchTerm} handleSearch={handleSearch} />

        {/* Image List */}
        <ImageList text={debouncedText} />
      </div>
    </div>
  );
};

export default App;
