import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Home: React.FC = () => {
  const { isLight } = useGlobalContext();
  return (
    <div
      data-theme={isLight ? 'winter' : 'dark'}
      className="w-full  box-border"
    >
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;
