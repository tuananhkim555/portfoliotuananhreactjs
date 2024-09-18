import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BotImageAi from './components/BotImageAi'
import AiChatbox from './components/AiChatbox';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Skills />
              <Portfolio />
              <Experience />
              <Contact />
            </>
          } />
          <Route path="/ai-image" element={<BotImageAi />} />
          <Route path="/ai-chatbox" element={<AiChatbox />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
