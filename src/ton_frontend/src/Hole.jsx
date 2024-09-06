
import React, { useState, useEffect } from 'react';
import { ton_backend } from 'declarations/ton_backend';
import '../public/bootstrap/css/bootstrap.min.css';

function UtilisateurTontine({ tontineId }) {
    const [tontine, setTontine] = useState(null);
    const [soldeCaisse, setSoldeCaisse] = useState(0);
    const [participants, setParticipants] = useState([]);
    const [createur, setCreateur] = useState('');
    const [regles, setRegles] = useState('');

    useEffect(() => {
        // Function to fetch tontine data from the smart contract
        const fetchTontineData = async () => {
            try {
                // Call the backend function to get tontine details
                const data = await ton_backend.getTontineDetails(tontineId);
                setTontine(data);
                setSoldeCaisse(data.soldeCaisse);
                setParticipants(data.participants);
                setCreateur(data.createur);
                setRegles(data.regles);
            } catch (error) {
                console.error('Erreur lors de la récupération des données de la tontine:', error);
            }
        };

        fetchTontineData();
    }, [tontineId]);

    return (
        <div className="container mt-5">
            <h2>Informations de la Tontine</h2>

            {tontine ? (
                <div>
                    <div className="mb-3">
                        <strong>Nom de la Tontine :</strong> {tontine.nom}
                    </div>
                    <div className="mb-3">
                        <strong>Créateur :</strong> {createur}
                    </div>
                    <div className="mb-3">
                        <strong>Règles :</strong> {regles}
                    </div>
                    <div className="mb-3">
                        <strong>Solde de la Caisse :</strong> {soldeCaisse} XAF
                    </div>
                    <div className="mb-3">
                        <strong>Liste des Participants :</strong>
                        <ul>
                            {participants.map((participant, index) => (
                                <li key={index}>
                                    {participant.nom} - Contribution: {participant.contribution} XAF
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <p>Chargement des informations de la tontine...</p>
            )}
        </div>
    );
}

export default UtilisateurTontine;
