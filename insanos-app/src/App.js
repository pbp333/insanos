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
import WelcomePage from './views/WelcomePage';

function App() {

  const user = { username: 'whatever' }

  return (
    <div>
      <Router>
        <Header />
        <div className="p-3">
          <Routes>
            <Route path="/" element={<HomePage user={user} />}>
            </Route>
            <Route path="/welcome" element={<WelcomePage user={user} />}>
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
