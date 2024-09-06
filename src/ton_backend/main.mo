
import Text "mo:base/Text";
import Bool "mo:base/Bool";
import Float "mo:base/Float";
import Nat "mo:base/Nat";
import Nat64 "mo:base/Nat64";
import HashMap "mo:base/HashMap";
// import Time "mo:base/Time";
import Array "mo:base/Array";
// import Iter "mo:base/Iter";

actor {
    // Définition du type User
    let i:Nat=0;
    type User = {
        nom: Text;
        prenom: Text;
        tel: Text;
        email: Text;
        address: Text;
        password: Text;
        children: [User];
        dateInscription: Nat64;
    };
    
    // État d'une tontine
    type Etat = {
        #Pending;
        #Going;
        #Ended;
    };
    
    // Type de tontine
    type Nature = {
        #Epargne;
        #Cotisation;
        #Investissement;
    };
    
    type Contribution = {
        sender: User;
        receiver: User;
        amount: Float;
        date: Nat;
    };
    
    // Type Tontine
    type Tontine = {
        id: Text;
        nom: Text;
        description: Text;
        etat: Etat;
        nature: Nature;
        frequence: Nat;
        montant: Float;
        penal: Float;  // Valeur des pénalités
        maxPart: Nat;  // Nombre maximal de participants
        debut: Nat;    // Timestamp de début
        fin: Nat;      // Date de fin
        creator: Text;
        participants: [User];
        contributions: [Contribution];
        solde: Float;
    };

    // Liste des utilisateurs enregistrés
    var utilisateurs = HashMap.HashMap<Text, User>(10, Text.equal, Text.hash);

    // HashMap pour les tontines
    var tontines = HashMap.HashMap<Text, Tontine>(10, Text.equal, Text.hash);

    // Fonction pour générer un ID unique basé sur le temps actuel
    func genererId() : Text {
        return Nat.toText(i+1);
    };

    // Fonction pour enregistrer un utilisateur (ajout du timestamp pour dateInscription)
    public func inscription(nom: Text, prenom: Text, tel: Text, email: Text, adresse: Text, password: Text,date:Nat64) : async () {
        let nouvelUtilisateur : User = {
            nom = nom;
            prenom = prenom;
            tel = tel;
            email = email;
            address = adresse;
            password = password;
            children = [];
            dateInscription = date; // Enregistrer la date actuelle
        };
        utilisateurs.put(tel, nouvelUtilisateur);
    };

    // Fonction pour créer une nouvelle tontine
    public func creerTontine(nom: Text, description: Text, nat: Nature, freq: Nat, mont: Float, penal: Float, nombreParticipantsMax: Nat, createur: Text,date:Nat) : async () {
        // Vérifier que le créateur existe
        switch (utilisateurs.get(createur)) {
            case (?createurUtilisateur) {
                let nouvelleTontine : Tontine = {
                    id = genererId();
                    nom = nom;
                    description = description;
                    nature = nat;
                    frequence = freq;
                    montant = mont;
                    penal = penal;
                    participants = [createurUtilisateur];
                    maxPart = nombreParticipantsMax;
                    debut = date;  // Timestamp de début
                    fin = 0;
                    creator = createur;
                    contributions = [];
                    solde = 0.0;
                    etat = #Pending;
                };
                tontines.put(nouvelleTontine.id, nouvelleTontine);
            };
            case (_) { /* Handle error for non-existent user */ }
        }
    };

    
    // Fonction pour rejoindre une tontine
    public func rejoindreTontine(tontineId: Text, utilisateurTel: Text) : async Bool {
        // Vérifier que la tontine existe
        switch (tontines.get(tontineId)) {
            case (?tontine) {
                let participantExists = Array.find(tontine.participants, func (u: User) : Bool {
    u.tel == utilisateurTel
});
                // Vérifier que l'utilisateur existe
                switch (utilisateurs.get(utilisateurTel)) {
                    case (?utilisateur) {
                        // Vérifier que l'utilisateur n'est pas déjà dans la tontine
                        if (participantExists!=null) {
                            return false; // Utilisateur déjà membre de la tontine
                        };
                        
                        // Vérifier que la tontine n'a pas atteint le nombre maximum de participants
                        if (Array.size(tontine.participants) >= tontine.maxPart) {
                            return false; // Nombre maximum de participants atteint
                        };

                        // Ajouter l'utilisateur à la liste des participants
                        let nouvelleListeParticipants = Array.append(tontine.participants, [utilisateur]);
                        tontines.put(tontineId, {
                            id = tontine.id;
                            nom = tontine.nom;
                            description = tontine.description;
                            nature = tontine.nature;
                            frequence = tontine.frequence;
                            montant = tontine.montant;
                            penal = tontine.penal;
                            participants = nouvelleListeParticipants;
                            maxPart = tontine.maxPart;
                            debut = tontine.debut;
                            fin = tontine.fin;
                            creator = tontine.creator;
                            contributions = tontine.contributions;
                            solde = tontine.solde;
                            etat = tontine.etat;
                        });

                        return true; // Succès
                    };
                    case (_) { return false; } // Utilisateur non trouvé
                };
            };
            case (_) { return false; } // Tontine non trouvée
        }
    };

    // Fonction pour consulter les informations d'une tontine
    public func consulterTontine(tontineId: Text) : async ?Tontine {
        return tontines.get(tontineId);
    };

    // Fonction pour consulter les informations sur un membre d'une tontine
    public func consulterMembreTontine(tontineId: Text, utilisateurTel: Text) : async ?User {
        switch (tontines.get(tontineId)) {
            case (?tontine) {
                return Array.find(tontine.participants, func (u: User) : Bool {
                    u.tel == utilisateurTel
                });
            };
            case (_) { return null; } // Tontine non trouvée
        }
    };

    // Fonction pour consulter tous les membres d'une tontine
    public func consulterMembresTontine(tontineId: Text) : async ?[User] {
        switch (tontines.get(tontineId)) {
            case (?tontine) { return ?tontine.participants; };
            case (_) { return null; } // Tontine non trouvée
        }
    };

    // Fonction pour consulter le solde d'une tontine
    public func consulterSoldeTontine(tontineId: Text) : async ?Float {
        switch (tontines.get(tontineId)) {
            case (?tontine) { return ?tontine.solde; };
            case (_) { return null; } // Tontine non trouvée
        }
    };

    // Fonction pour consulter les informations sur chaque transaction effectuée dans une tontine
    public func consulterContributionsTontine(tontineId: Text) : async ?[Contribution] {
        switch (tontines.get(tontineId)) {
            case (?tontine) { return ?tontine.contributions; };
            case (_) { return null; } // Tontine non trouvée
        }
    };
}
