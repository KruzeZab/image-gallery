import { MdOutlineLightMode } from 'react-icons/md';

import Button from '@/components/common/Button';

const Header = () => {
  return (
    <div className="flex items-center justify-between py-4 shadow">
      {/* Placeholder */}
      <div className="grow-1" />
      {/* Branding */}
      <h1 className="text-3xl text-center grow-2">Image Gallery</h1>
      {/* Theme Toggle */}
      <div className="grow-1">
        <Button type="button" className="block" title="Toggle theme">
          <MdOutlineLightMode fontSize={28} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
