import React, { useState } from 'react';
import '../public/bootstrap/css/bootstrap.min.css'; // Assurez-vous que le chemin est correct

const CreatTontine = () => {
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');
  const [nature, setNature] = useState('Epargne');
  const [frequence, setFrequence] = useState('');
  const [montant, setMontant] = useState('');
  const [penal, setPenal] = useState('');
  const [maxPart, setMaxPart] = useState('');
  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');
  const [createur, setCreateur] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tontineData = {
      nom,
      description,
      nature,
      frequence: parseInt(frequence, 10),
      montant: parseFloat(montant),
      penal: parseFloat(penal),
      nombreParticipantsMax: parseInt(maxPart, 10),
      createur,
      date: new Date(dateDebut).getTime() // Convertir en timestamp
    };

    try {
      // Envoyer les données au backend ou à l'API pour créer la tontine
      const response = await axios.post('/api/creerTontine', tontineData);
      if (response.status === 200) {
        alert('Tontine créée avec succès!');
      }
    } catch (error) {
      console.error('Erreur lors de la création de la tontine:', error);
      alert('Erreur lors de la création de la tontine');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Créer une Tontine</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="formTontineName">Nom de la Tontine</label>
          <input
            type="text"
            className="form-control"
            id="formTontineName"
            placeholder="Entrez le nom de la tontine"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="formTontineDescription">Description</label>
          <textarea
            className="form-control"
            id="formTontineDescription"
            rows="3"
            placeholder="Entrez une description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="formTontineNature">Nature</label>
          <select
            className="form-control"
            id="formTontineNature"
            value={nature}
            onChange={(e) => setNature(e.target.value)}
            required
          >
            <option value="Epargne">Epargne</option>
            <option value="Cotisation">Cotisation</option>
            <option value="Investissement">Investissement</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="formTontineFrequence">Fréquence</label>
          <input
            type="number"
            className="form-control"
            id="formTontineFrequence"
            placeholder="Entrez la fréquence"
            value={frequence}
            onChange={(e) => setFrequence(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="formTontineMontant">Montant</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="formTontineMontant"
            placeholder="Entrez le montant"
            value={montant}
            onChange={(e) => setMontant(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="formTontinePenal">Pénalités</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="formTontinePenal"
            placeholder="Entrez le montant des pénalités"
            value={penal}
            onChange={(e) => setPenal(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="formTontineMaxPart">Nombre Maximum de Participants</label>
          <input
            type="number"
            className="form-control"
            id="formTontineMaxPart"
            placeholder="Entrez le nombre maximum de participants"
            value={maxPart}
            onChange={(e) => setMaxPart(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="formTontineDateDebut">Date de Début</label>
          <input
            type="date"
            className="form-control"
            id="formTontineDateDebut"
            value={dateDebut}
            onChange={(e) => setDateDebut(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="formTontineDateFin">Date de Fin</label>
          <input
            type="date"
            className="form-control"
            id="formTontineDateFin"
            value={dateFin}
            onChange={(e) => setDateFin(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formTontineCreateur">Créateur</label>
          <input
            type="text"
            className="form-control"
            id="formTontineCreateur"
            placeholder="Entrez l'identifiant du créateur"
            value={createur}
            onChange={(e) => setCreateur(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Créer la Tontine</button>
      </form>
    </div>
  );
};

export default CreatTontine;
