import type { RouteObject } from 'react-router-dom';
import MarketingLayout from './layouts/MarketingLayout';
import Home from './pages/Home';
import About from './pages/About';
import Training from './pages/Training';
import PersonalTraining from './pages/PersonalTraining';
import GroupTraining from './pages/GroupTraining';
import SuccessStories from './pages/SuccessStories';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Book from './pages/Book';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

export const appRoutes: RouteObject[] = [
  {
    element: <MarketingLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/training', element: <Training /> },
      { path: '/training/personal', element: <PersonalTraining /> },
      { path: '/training/group', element: <GroupTraining /> },
      { path: '/success-stories', element: <SuccessStories /> },
      { path: '/media', element: <Media /> },
      { path: '/contact', element: <Contact /> },
      { path: '/book', element: <Book /> },
      { path: '/privacy', element: <Privacy /> },
      { path: '/terms', element: <Terms /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
