import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Preferences from './pages/Preferences';
import ArticleView from './pages/ArticleView';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/articles/:id" element={<ArticleView />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
