import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
          </Routes>
          <Routes>
            <Route 
              path="/About" 
              element={<About />} 
            />
          </Routes>
          <Routes>
            <Route 
              path="/Contact" 
              element={<Contact />} 
            />
          </Routes>
          <Routes>
            <Route 
              path="/Faq" 
              element={<Faq />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

