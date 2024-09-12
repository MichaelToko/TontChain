
// import React, { useState } from 'react';
// import { ton_backend } from 'declarations/ton_backend';
// import '../public/bootstrap/css/bootstrap.min.css';
// import './signInPage.css';

// function Inscription() {
//     const [nom, setNom] = useState('');
//     const [prenom, setPrenom] = useState('');
//     const [email, setEmail] = useState('');
//     const [motDePasse, setMotDePasse] = useState('');
//     const [adresse, setAdresse] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             // Call the backend function to register the user
//             const result = await ton_backend.registerUser({
//                 nom,
//                 prenom,
//                 email,
//                 motDePasse,
//                 adresse
//             });
//             console.log('Inscription réussie:', result);
//         } catch (error) {
//             console.error('Erreur lors de l\'inscription:', error);
//         }
//     };

//     return (
//         <>
//             <div className='section'>
//                 <p className='sign'>Sign in</p>
//                 <div className='main'>
//                     {/* Partie gauche : BON RETOUR */}
//                 <div className="leftside">
//                     <h1 className='left-title'>BON RETOUR !!!</h1>
//                     <p className='leftp'>Pour rester connecté, remplissez s'il-vous-plait vos informations personnelles.</p>
//                     <button className='connect' onClick={handleSubmit}> Se connecter </button>
//                 </div> 

//                 {/* Partie droite : Créer un compte */}
//                 <div className="rightside">
//                     <div className='title'>
//                         <h1 className='right-title'>Créer Un Compte</h1>
//                         <img src='./gplus-svgrepo-com.svg' alt='google icon' onClick={() => handleSocialLogin('Google')} />
//                         <img src='./facebook-svgrepo-com.svg' alt='facebook icon' onClick={() => handleSocialLogin('Facebook')} />
//                         <img src='./linkedin-svgrepo-com.svg' alt='linkedin icon' onClick={() => handleSocialLogin('LinkedIn')} />
//                 </div>
//                     <p className='rightp'> Ou utiliser votre adresse mail : </p>

//                 {/* Formulaire de création de compte */}
//                 <form className='createform' /*onSubmit={handleCreateAccount}*/>
//                     <div className="mb-3">
//                         <label htmlFor="nom" className="form-label">Nom</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="nom"
//                             value={nom}
//                             onChange={(e) => setNom(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="prenom" className="form-label">Prénom</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="prenom"
//                             value={prenom}
//                             onChange={(e) => setPrenom(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="email" className="form-label">Email</label>
//                         <input
//                             type="email"
//                             className="form-control"
//                             id="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="motDePasse" className="form-label">Mot de passe</label>
//                         <input
//                             type="password"
//                             className="form-control"
//                             id="motDePasse"
//                             value={motDePasse}
//                             onChange={(e) => setMotDePasse(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="adresse" className="form-label">Adresse</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="adresse"
//                             value={adresse}
//                             onChange={(e) => setAdresse(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <button className='create' type='submit'> Créer </button>
//                 </form>
//             </div>
//         </div>
//     </div>
// </>

//     );
// }

// export default Inscription;
import React from 'react';
import './signInPage.css';

function SignInPage() {
    const handleSignIn = () => {
        console.log('Se connecter');
    };

    const handleCreateAccount = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        console.log('Créer un compte');
    };

    const handleSocialLogin = (platform) => {
        console.log(`Connexion avec ${platform}`);
    };

    return (
        <>
            <div className='section'>
            <div className='main'>
                <div className="leftside">
                    <h1 className='left-title'>BON RETOUR !!!</h1>
                    <p className='leftp'>Pour rester connecté, remplissez s'il-vous-plait vos informations personnelles.</p>
                    <button className='connect' onClick={handleSignIn}> Se connecter </button>
                </div> 
                <div className="rightside">
                    <div className='title'>
                        <h1 className='right-title'>Créer Un Compte</h1>
                        <img src='./gplus-svgrepo-com.svg' alt='google icon' onClick={() => handleSocialLogin('Google')} />
                        <img src='./facebook-svgrepo-com.svg' alt='facebook icon' onClick={() => handleSocialLogin('Facebook')} />
                        <img src='./linkedin-svgrepo-com.svg' alt='linkedin icon' onClick={() => handleSocialLogin('LinkedIn')} />
                    </div>
                    <p className='rightp'> Ou utiliser votre adresse mail : </p>
                    <form className='createform' onSubmit={handleCreateAccount}>
                        <div><input type='text' placeholder='Nom(s) & Prénom(s)' required /></div> 
                        <div><input type='email' placeholder='Adresse mail' required /></div> 
                        <div><input type='password' placeholder='Mot de passe' required /></div> 
                        <button className='create' type='submit'> Créer </button>
                    </form>
                </div>
            </div>
            </div>
        </>
    );
}

export default SignInPage;

