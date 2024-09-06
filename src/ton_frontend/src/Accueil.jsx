import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Bienvenue sur l'application de gestion de Tontines</h1>
      <p className="text-center">Gérez vos tontines de manière efficace et sécurisée.</p>

      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <div className="list-group">
            <Link to="/creer-tontine" className="list-group-item list-group-item-action">
              <h5>Créer une nouvelle Tontine</h5>
              <p>Définissez les règles et invitez des participants.</p>
            </Link>
            <Link to="/consulter-tontines" className="list-group-item list-group-item-action">
              <h5>Voir les Tontines</h5>
              <p>Consultez les tontines existantes et leur statut.</p>
            </Link>
            <Link to="/rejoindre-tontine" className="list-group-item list-group-item-action">
              <h5>Rejoindre une Tontine</h5>
              <p>Participez à une tontine déjà existante.</p>
            </Link>
            <Link to="/profil" className="list-group-item list-group-item-action">
              <h5>Mon Profil</h5>
              <p>Gérez vos informations personnelles.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
