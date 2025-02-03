import { Theme } from '@/interfaces/common';
import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add(Theme.DARK);
    } else {
      root.classList.remove(Theme.DARK);
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark((prev) => !prev);

  return { isDark, toggleDarkMode };
};

export default useDarkMode;
