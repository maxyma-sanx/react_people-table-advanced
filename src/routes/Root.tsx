import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import { App } from '../App';
import { HomePage, PageNotFound, PeoplePage } from '../pages';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="people">
          <Route index element={<PeoplePage />} />
          <Route path=":slug" element={<PeoplePage />} />
        </Route>

        <Route path="home" element={<Navigate to=".." replace />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </HashRouter>
);
