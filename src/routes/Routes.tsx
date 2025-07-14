import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';
import NotFoundPage from '../pages/NotFoundPage';
import Forums from '../pages/Forums';
import Profile from '../components/profile/Profile';

export const PUBLIC_ROUTES = ['/login', '/register'];

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',
    element: <PrivateRoute />,
    children: [
      {
        path: '',
        element: <Forums />,
      },
      {
        path: 'forums/:_id',
        element: <Forums />,
      },
      {
        path: 'forums',
        element: <Forums />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
