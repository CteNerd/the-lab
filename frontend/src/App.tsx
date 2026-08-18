import { HashRouter, Routes, Route } from 'react-router-dom';
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

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MarketingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/training" element={<Training />} />
          <Route path="/training/personal" element={<PersonalTraining />} />
          <Route path="/training/group" element={<GroupTraining />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
