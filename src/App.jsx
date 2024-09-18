import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Header,
  Footer,
  Home,
  About,
  Projects,
  Services,
  Testimonial,
  Contact,
} from "./components/index.js";
import NotFound from './components/NotFound.jsx';
import Resume from './components/Resume.jsx'

// Layout component with Header and Footer
function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Main routes with Header and Footer */}
        <Route
          path=""
          element={
            <Layout>
              <Home />
              <About />
              <Services />
              <Projects />
              {/* <Testimonial /> */}
              <Contact />
            
            </Layout>
          }
        />
        {/* NotFound route without Header and Footer */}
        <Route path="*" element={<NotFound />} />
        <Route path="/resume" element={ <Resume /> } />

      </Routes>
    </Router>
  );
}

export default App;
