import React from 'react';
import i18n from 'i18next';

interface GlobalContextProps {
  isLight: boolean;
  setIsLight: React.Dispatch<React.SetStateAction<boolean>>;
  isLangArabic: boolean;
  toggleLang: () => void;
}

const GlobalContext = React.createContext<GlobalContextProps | undefined>(
  undefined
);

export const useGlobalContext = (): GlobalContextProps => {
  const context = React.useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLight, setIsLight] = React.useState<boolean>(
    JSON.parse(localStorage.getItem('theme') || 'true')
  );

  const [isLangArabic, setIsLangArabic] = React.useState<boolean>(() => {
    const lang = localStorage.getItem('lang');
    return lang !== null ? JSON.parse(lang) : true;
  });

  React.useEffect(() => {
    const lang = isLangArabic ? 'ar' : 'en';
    i18n.changeLanguage(lang);
    document.documentElement.dir = isLangArabic ? 'rtl' : 'ltr';
  }, [isLangArabic]);

  const toggleLang = () => {
    setIsLangArabic((prev) => {
      const newLang = !prev;
      localStorage.setItem('lang', JSON.stringify(newLang));
      return newLang;
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        isLight,
        setIsLight,
        isLangArabic,
        toggleLang,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
