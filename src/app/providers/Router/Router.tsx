import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MainPage } from '@/pages/MainPage';
import { MainLayout } from '@/shared/layouts/MainLayout';

const config = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [{ index: true, Component: MainPage }],
  },
]);

export function Router() {
  return <RouterProvider router={config} />;
}
