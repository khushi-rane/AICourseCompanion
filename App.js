import React,{useEffect} from 'react';
import Unit1 from './Units_student/Unit1.js';
import Home from './Main/Home.js';
import Unit_3 from './Units_student/Unit_3.js';


const App = () => {
    useEffect(() => {
        const toggleBtn = document.getElementById('toggle-btn');
        const body = document.body;
        let darkMode = localStorage.getItem('dark-mode');

        // Function to enable dark mode
        const enableDarkMode = () => {
            if (toggleBtn) {
                toggleBtn.querySelector('i').classList.replace('bxs-sun', 'bxs-moon');
            }
            body.classList.add('dark');
            localStorage.setItem('dark-mode', 'enabled');
        };

        // Function to disable dark mode
        const disableDarkMode = () => {
            if (toggleBtn) {
                toggleBtn.querySelector('i').classList.replace('bxs-moon', 'bxs-sun');
            }
            body.classList.remove('dark');
            localStorage.setItem('dark-mode', 'disabled');
        };

        // Initialize dark mode based on local storage
        if (darkMode === 'enabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }

        // Toggle dark mode on button click
        if (toggleBtn) {
            toggleBtn.onclick = () => {
                darkMode = localStorage.getItem('dark-mode');
                if (darkMode === 'disabled') {
                    enableDarkMode();
                } else {
                    disableDarkMode();
                }
            };
        }
    }, []);

  return (
    <div className="App">
      <Home/>  
      <Unit1/>
    </div>
  );
};

export default App;