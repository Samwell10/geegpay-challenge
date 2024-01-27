import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Router from './routes';
import { useEffect, useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for user's preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setIsDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    // Apply dark mode or light mode styles
    document.body.classList.toggle('dark-mode', isDarkMode);

    // Save user's preference to local storage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <BrowserRouter>
        <Router  mode={toggleMode} isdarkmode={isDarkMode}/>
      </BrowserRouter>
    </div>
  );
}
export default App;
