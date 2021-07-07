import React from 'react';
import DashboardLayout from '../src/containers/DashboardLayout';
import Dashboard from '../src/pages/Dashboard';
import Forms from './pages/Forms';

const routes = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'forms', element: <Forms /> }
    ]
  }
];

export default routes;
