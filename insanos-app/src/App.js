import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import HomePage from './views/HomePage';
import AboutPage from './views/AboutPage';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="p-3">
          <Routes>
            <Route path="/" element={<HomePage />}>
            </Route>
            <Route path="/about" element={<AboutPage />}>
            </Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
