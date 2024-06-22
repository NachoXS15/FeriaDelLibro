import '../styles/buttons.scss'
import '../styles/index.scss'
import { NavLink } from "react-router-dom";
import Header from "../components/ui/Header";
import CategoryCard from "../components/ui/CategoryCard";
export default function Inicio() {
  return (
    <>
    <main>
      <Header />
      <section className="library-index">
        <div id="library-left">
          <h2>Biblioteca Digital</h2>
          <h4>Encuentra los mejor libros en muestra</h4>
          <NavLink className="blue" to={'/library'}>Ver más</NavLink>
        </div>
        <div>
          <div className="test"></div>
        </div>
      </section>
      <section id="categories">
        <h3 className='blue-title'>Categorias</h3>
        <div>
          <CategoryCard bg_color={"#ffc800"} title1={"Autores"} title2={"Riojanos"} />
          <CategoryCard bg_color={"#004b7b"} title1={"Autores"} title2={"Clásicos"} />
          <CategoryCard bg_color={"#f36b77"} title1={"Libros"} title2={"Infantiles"}  />
        </div>
      </section>
      <section id="ruleta-index">
        <h1>Ruleta de la Literatura</h1>
        <div id="bottom">
          <div id="book1"></div>
          <NavLink to={'/ruleta'} className="red">Juega Ahora</NavLink>
          <div id="ruleta1"></div>
        </div>
      </section>
      <section id="qagame-index">
        <div id="qagame-index-left">
          <h1>Trivia Literaria</h1>
          <NavLink to={'/qagame'} className='blue'>Juega Ahora</NavLink>
        </div>
        <div id="qagame-index-right"></div>
      </section>

    </main>
    </>
  )
}
