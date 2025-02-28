import React from 'react';
import DrawerLayout from '../components/DrawerLayout';
import { useTranslation } from 'react-i18next';

const Landing: React.FC = () => {
  const { t } = useTranslation();
  return (
    <DrawerLayout>
      <div className="p-4">
        <h2 className="text-2xl font-bold">{t('page title')}</h2>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="px-2 sm:px-4 py-2"></th>
                <th className="px-2 sm:px-4 py-2">{t('name')}</th>
                <th className="px-2 sm:px-4 py-2">{t('job')}</th>
                <th className="px-2 sm:px-4 py-2">{t('favorite color')}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <th className="px-2 sm:px-4 py-2">1</th>
                <td className="px-2 sm:px-4 py-2">Cy Ganderton</td>
                <td className="px-2 sm:px-4 py-2">
                  {t('quality control specialist')}
                </td>
                <td className="px-2 sm:px-4 py-2">{t('blue')}</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-2 sm:px-4 py-2">2</th>
                <td className="px-2 sm:px-4 py-2">Hart Hagerty</td>
                <td className="px-2 sm:px-4 py-2">
                  {t('desktop support technician')}
                </td>
                <td className="px-2 sm:px-4 py-2">{t('purple')}</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-2 sm:px-4 py-2">3</th>
                <td className="px-2 sm:px-4 py-2">Brice Swyre</td>
                <td className="px-2 sm:px-4 py-2">{t('tax accountant')}</td>
                <td className="px-2 sm:px-4 py-2">{t('red')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DrawerLayout>
  );
};

export default Landing;
