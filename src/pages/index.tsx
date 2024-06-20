import { NavLink } from "react-router-dom";
import Header from "../components/ui/Header";
export default function Inicio() {
  return (
    <>
      <Header />
      <section className="library">
        <div id="library-left">
          <h2>Biblioteca Digital</h2>
          <h4>Encuentra los mejor libros en muestra</h4>
          <NavLink className="blue" to={'/library'}>Ver más</NavLink>
        </div>
        <div>
          <div className="test"></div>
        </div>
      </section>
      <section id="ruleta">
        <h1>Ruleta de la Literatura</h1>
        <div id="bottom">
          <div id="book1"></div>
          <NavLink to={'/qagame'} className="red">Juega Ahora</NavLink>
          <div id="ruleta1"></div>
        </div>
      </section>
    </>
  )
}
