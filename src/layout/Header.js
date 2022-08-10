import { Link } from "react-router-dom";
import Netflix from "../assets/netflix.svg";

function Header() {
  return (
    <header className="Header">
      <img src={Netflix} alt="netflix logo" />

      <a href="#">
        {" "}
        <Link to="/everywhere">Everywhere</Link>
      </a>
      <a href="#">
        {" "}
        <Link to="/download">Telechargement</Link>
      </a>
      <a href="#">
        {" "}
        <Link to="/devices">Peripheriques</Link>
      </a>
      <a href="#">
        {" "}
        <Link to="/search">Recherche Film</Link>
      </a>
    </header>
  );
}

export default Header;
