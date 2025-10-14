import { useState } from "react";

// Composant d’inscription (SignUp)
export default function SignUp() {

  // useState crée des variables "réactives" pour stocker les valeurs saisies dans le formulaire.
  // Chaque champ a sa propre variable d’état et une fonction pour la mettre à jour.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");

  // Fonction appelée quand l’utilisateur clique sur "Submit"
  function Submit(e) {
    // Empêche le rechargement de la page (comportement par défaut des formulaires HTML)
    e.preventDefault();

    // Pour le moment, on peut simplement vérifier que les valeurs sont bien capturées :
    // console.log(name);
    // console.log(email);
    // console.log(password);
    // console.log(passwordR);
  }

  return (
    <div className="form-container">
      {/* Formulaire d’inscription */}
      <form className="form-card" onSubmit={Submit}>
        <h2 className="form-title">Inscription</h2>

        {/* Champ du nom */}
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          id="name"
          type="text"
          placeholder="Name ..."
          className="form-input"
          value={name} // valeur liée à l’état "name"
          onChange={(e) => setName(e.target.value)} // met à jour "name" à chaque saisie
        />

        {/* Champ de l’email */}
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email ..."
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required // champ obligatoire
        />

        {/* Champ du mot de passe */}
        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password ..."
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Confirmation du mot de passe */}
        <label htmlFor="resetPassword" className="form-label">
          Reset Password:
        </label>
        <input
          id="resetPassword"
          type="password"
          placeholder="Confirm Password ..."
          className="form-input"
          value={passwordR}
          onChange={(e) => setPasswordR(e.target.value)}
        />

        {/* Boutons d’action */}
        <div className="form-actions">
          <button type="submit" className="btn primary">
            Submit
          </button>
          <button type="reset" className="btn outline">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
