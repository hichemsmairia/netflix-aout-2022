import React from "react";

export default function Footer() {
  return (
    <footer className="Footer">
      <form className="Form">
        <input
          type="text"
          name="InputText"
          id="input-text"
          placeholder="Email:"
        />

        <button> chercher </button>
      </form>

      <p>Copyright &copy; NETFLIX Tunisie. tous droits reservées</p>

      <p>
        &copy; credits:{" "}
        <a href="https://www.linkedin.com/" target="_blank">
          GROUP FORMATION JUIN JUILLET 2022
        </a>{" "}
        - Programmer
      </p>

      <p>merci pour votre visite</p>

      <p>
        ||{" "}
        <a href="https://www.linkedin.com/" target="_blank">
          LinkedIn
        </a>{" "}
        ||{" "}
        <a href="https://github.com/" target="_blank">
          GitHub
        </a>{" "}
        ||{" "}
        <a href="https://www.upwork.com/" target="_blank">
          Upwork
        </a>{" "}
        ||{" "}
        <a href="https://www.99freelas.com.br" target="_blank">
          99Freelas
        </a>{" "}
        ||
      </p>
    </footer>
  );
}
