import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HeroPage from './Components/HeroPage/HeroPage';
import AboutPage from './Components/AboutPage/AboutPage';
import SkillsPage from './Components/SkillsPage/SkillsPage';
import ContactPage from './Components/ContactPage/ContactPage';
import WorksPage from './Components/WorksPage/WorksPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import LoadingPage from './Components/LoadingPage/LoadingPage';

function App() {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, [])

  const [loading, setLoading] = useState(false)

  setTimeout(() => {
    setLoading(true)
  }, 3500)

  return (
    loading === false ? <LoadingPage /> : <div className="main__container">
      <Navbar />
      <div className="main__contents">
        <HeroPage />
        <AboutPage />
        <SkillsPage />
        <WorksPage />
        <ContactPage />
      </div>
    </div>
  );
}

export default App;
