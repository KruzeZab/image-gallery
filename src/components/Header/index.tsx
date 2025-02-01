import { MdOutlineLightMode } from 'react-icons/md';

import Button from '@/components/common/Button';

const Header = () => {
  return (
    <div className="p-4 flex items-center justify-between shadow bg-white fixed top-0 w-full">
      {/* Placeholder */}
      <div className="hidden lg:block grow-1" />
      {/* Branding */}
      <h1 className="text-3xl text-center lg:grow-2">Image Gallery</h1>
      {/* Theme Toggle */}
      <div className="lg:grow-1">
        <Button type="button" className="block" title="Toggle theme">
          <MdOutlineLightMode fontSize={28} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
