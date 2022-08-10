import React from "react";

export default function Main() {
  return (
    <main className="Main">
      <div className="Main-Child">
        <h1>Films, émissions de télévision et plus encore illimités.</h1>

        <span>Regardez n'importe où. Annulez à tout moment.</span>

        <p>
          Prêt à regarder ? Entrez votre email pour créer ou réinitialiser votre
          abonnement.
        </p>
        <form className="Form">
          <input
            type="text"
            name="InputText"
            id="input-text"
            placeholder="saisir votre email"
          />

          <button> chercher ! </button>
        </form>
      </div>

      <div className="Gradient"></div>
    </main>
  );
}
