import DashboardLayout from '../src/containers/DashboardLayout';
import Dashboard from '../src/pages/Dashboard';

const routes = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [{ path: 'dashboard', element: <Dashboard /> }]
  }
];

export default routes;
