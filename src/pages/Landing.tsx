import React from 'react';
import DrawerLayout from '../components/DrawerLayout';

const Landing: React.FC = () => {
  return (
    <DrawerLayout>
      <div className="p-4">
        <h2 className="text-2xl font-bold">Landing Page Content</h2>
        {/* Other content specific to the landing page */}
      </div>
    </DrawerLayout>
  );
};

export default Landing;
