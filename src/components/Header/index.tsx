import { MdOutlineLightMode } from 'react-icons/md';

import Button from '@/components/common/Button';

const Header = () => {
  return (
    <header className="header">
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
    </header>
  );
};

export default Header;
