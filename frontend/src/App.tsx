import { BrowserRouter, useRoutes } from 'react-router-dom';
import { appRoutes } from './appRoutes';
import { getRouterBasename } from './utils/sitePaths';

function AppRoutes() {
  return useRoutes(appRoutes);
}

export default function App() {
  return (
    <BrowserRouter basename={getRouterBasename(import.meta.env.BASE_URL)}>
      <AppRoutes />
    </BrowserRouter>
  );
}
