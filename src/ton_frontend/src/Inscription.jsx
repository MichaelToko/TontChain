
import React, { useState } from 'react';
import { ton_backend } from 'declarations/ton_backend';
import '../public/bootstrap/css/bootstrap.min.css';

function Inscription() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    const [adresse, setAdresse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Call the backend function to register the user
            const result = await ton_backend.registerUser({
                nom,
                prenom,
                email,
                motDePasse,
                adresse
            });
            console.log('Inscription réussie:', result);
        } catch (error) {
            console.error('Erreur lors de l\'inscription:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Inscription à la Tontine</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nom" className="form-label">Nom</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nom"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="prenom" className="form-label">Prénom</label>
                    <input
                        type="text"
                        className="form-control"
                        id="prenom"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="motDePasse" className="form-label">Mot de passe</label>
                    <input
                        type="password"
                        className="form-control"
                        id="motDePasse"
                        value={motDePasse}
                        onChange={(e) => setMotDePasse(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="adresse" className="form-label">Adresse</label>
                    <input
                        type="text"
                        className="form-control"
                        id="adresse"
                        value={adresse}
                        onChange={(e) => setAdresse(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">S'inscrire</button>
            </form>
        </div>
    );
}

export default Inscription;
