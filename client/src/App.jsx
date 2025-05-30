import { Hero, About, Services, Contact, Footer } from './sections';
import { Header } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TermsOfService, PrivacyPolicy } from './pages';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="pt-[10vh]">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Services />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;