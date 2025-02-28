import React from 'react';
import { useTranslation } from 'react-i18next';

interface DrawerLayoutProps {
  children: React.ReactNode;
}

const DrawerLayout: React.FC<DrawerLayoutProps> = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div className="drawer drawer-mobile xl:drawer-open">
      {/* Hidden checkbox to control the drawer */}
      <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        {/* Clicking this overlay on small screens will close the drawer */}
        <label
          htmlFor="drawer-toggle"
          aria-label="close sidebar"
          className="drawer-overlay xl:hidden"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar navigation items */}
          <li>
            <a>{t('slider 1')}</a>
          </li>
          <li>
            <a>{t('slider 2')}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DrawerLayout;
