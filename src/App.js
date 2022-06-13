import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/home/Home';
import WelcomeScreen from './components/welcomeScreen/WelcomeScreen.jsx';

function App() {
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    setTimeout(()=>{
      setShowWelcome(false);
    }, 6500)
    return () => {
    }
  })

  return (
    <React.Fragment>
      { showWelcome 
        ?<WelcomeScreen />
        :null
      }
      <Home />
    </React.Fragment>
  );
}

export default App;
