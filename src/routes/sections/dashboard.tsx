import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthGuard } from 'src/auth/guard';
import DashboardLayout from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

const PageDashboard = lazy(() => import('src/pages/dashboard/dashboard'));
const PageNotifincations = lazy(() => import('src/pages/dashboard/notifications'));
const PageEnter = lazy(() => import('src/pages/dashboard/enter'));
const PageWarehouse = lazy(() => import('src/pages/dashboard/warehouse'));
const PageExit = lazy(() => import('src/pages/dashboard/exit'));
const PageProducts = lazy(() => import('src/pages/dashboard/products'));
const PageCategories = lazy(() => import('src/pages/dashboard/categories'));
const PageUnitMeasurements = lazy(() => import('src/pages/dashboard/units-measurements'));
const PageReasons = lazy(() => import('src/pages/dashboard/reasons'));
const PageCustomer = lazy(() => import('src/pages/dashboard/customer'));
const PageUsers = lazy(() => import('src/pages/dashboard/users'));
const PageDelivery = lazy(() => import('src/pages/dashboard/delivery'));

// ----------------------------------------------------------------------

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    ),
    children: [
      { element: <PageDashboard />, index: true },
      { path: 'notifications', element: <PageNotifincations /> },
      { path: 'enter', element: <PageEnter /> },
      { path: 'warehouse', element: <PageWarehouse /> },
      { path: 'exit', element: <PageExit /> },
      { path: 'products', element: <PageProducts /> },
      { path: 'categories', element: <PageCategories /> },
      { path: 'units_measurements', element: <PageUnitMeasurements /> },
      { path: 'reasons', element: <PageReasons /> },
      { path: 'customer', element: <PageCustomer /> },
      { path: 'users', element: <PageUsers /> },
      { path: 'delivery', element: <PageDelivery /> },
    ],
  },
];
