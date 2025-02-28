import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import { FaBars } from 'react-icons/fa';

const Header: React.FC = () => {
  const { isLight, setIsLight, isLangArabic, toggleLang } = useGlobalContext();

  const handleThemeToggle = () => {
    const newTheme = !isLight;
    setIsLight(newTheme);
    localStorage.setItem('theme', JSON.stringify(newTheme));
  };

  return (
    <div className="bg-primary p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary bg-secondary px-4 py-2 rounded-lg shadow-md transition-all duration-300">
        ED
      </div>
      <div className="flex justify-between items-center space-x-4">
        {/* Theme Toggle Button */}
        <button
          className="w-8 lg:w-24 btn rounded-full text-primary bg-secondary flex justify-center items-center text-xs md:text-sm lg:text-base"
          onClick={handleThemeToggle}
          aria-label="Toggle theme"
        >
          Th
        </button>
        {/* Language Toggle Button */}
        <button
          className="w-8 lg:w-24 btn rounded-full text-primary bg-secondary flex justify-center items-center text-xs md:text-sm lg:text-base"
          onClick={() => toggleLang()}
          aria-label="Toggle language"
        >
          {isLangArabic ? 'ar' : 'en'}
        </button>

        <div className="flex-none">
          {/* Drawer toggle button (visible on screens smaller than xl) */}
          <label
            htmlFor="drawer-toggle"
            className="btn w-14 md:w-24 rounded-full text-primary bg-secondary drawer-button xl:hidden text-xl md:text-2xl lg:text-3xl"
            aria-label="Toggle sidebar"
          >
            <FaBars />
          </label>
        </div>
        <div className="avatar">
          <div className="w-14 md:w-24 rounded-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
