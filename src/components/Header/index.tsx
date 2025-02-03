import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

import useDarkMode from '@/hooks/useDarkMode';

import Button from '@/components/common/Button';
import { FcStackOfPhotos } from 'react-icons/fc';

const Header = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <header className="header">
      {/* Placeholder */}
      <div className="hidden lg:block grow-1" />
      {/* Branding */}
      <h1 className="text-xl lg:text-2xl text-center lg:grow-2 flex items-center gap-2 justify-center">
        <div>
          <FcStackOfPhotos fontSize={28} />
        </div>
        <div>Image Gallery</div>
      </h1>
      {/* Theme Toggle */}
      <div className="lg:grow-1">
        <Button
          type="button"
          className="block"
          title="Toggle theme"
          aria-label="Toggle theme"
          onClick={toggleDarkMode}
        >
          {isDark ? (
            <MdOutlineLightMode fontSize={24} />
          ) : (
            <MdOutlineDarkMode fontSize={24} />
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;
