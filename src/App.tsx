import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import { Home, Landing } from './pages';
const AppRouter: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,

      children: [
        {
          index: true,
          element: <Landing />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
function App() {
  return (
    <GlobalProvider>
      <AppRouter />
    </GlobalProvider>
  );
}

export default App;
