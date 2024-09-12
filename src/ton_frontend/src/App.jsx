import { useState } from 'react';
import { ton_backend } from 'declarations/ton_backend';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignInPage from './Inscription';
import CreatTontine from './CreatTontine';
import DashboardPage from './Hole';
import HomePage from './Accueil';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    ton_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <Router>
      {/* <main>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/inscription">Inscription</Link></li>
            <li><Link to="/creer-tontine">Créer une Tontine</Link></li>
            <li><Link to="/utilisateur-tontine">Utilisateur Tontine</Link></li>
          </ul>
        </nav> */}
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/inscription" element={<SignInPage/>} />
          <Route path="/creer-tontine" element={<CreatTontine />} />
          <Route path="/utilisateur-tontine" element={<DashboardPage tontineId={1} />} />
        </Routes>
    </Router>
  );
}

export default App;
