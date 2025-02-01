import { useState } from 'react';
import { MdSearch } from 'react-icons/md';

import Header from '@/components/Header';
import ImageList from '@/components/ImageList';
import TextInput from '@/components/common/TextInput';

const App = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-6 px-2 lg:px-0">
        {/* Search Box */}
        <div className="max-w-2xl mx-auto">
          <TextInput
            type="text"
            placeholder="Search by author..."
            required
            startIcon={<MdSearch fontSize={21} className="text-gray-600" />}
            value={text}
            onChange={handleTextChange}
            className="p-2 pl-10"
          />
        </div>

        {/* Image List */}
        <ImageList />
      </div>
    </div>
  );
};

export default App;
