import { useState } from 'react';
import { ton_backend } from 'declarations/ton_backend';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inscription from './Inscription';
import CreerTontine from './CreatTontine';
import UtilisateurTontine from './Hole';

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
      <main>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/inscription">Inscription</Link></li>
            <li><Link to="/creer-tontine">Créer une Tontine</Link></li>
            <li><Link to="/utilisateur-tontine">Utilisateur Tontine</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/creer-tontine" element={<CreatTontine />} />
          <Route path="/utilisateur-tontine" element={<UtilisateurTontine tontineId={1} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
