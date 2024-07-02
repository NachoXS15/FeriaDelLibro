import '../styles/buttons.scss'
import '../styles/index.scss'
import { NavLink } from "react-router-dom";
import bookCover from '../../public/assets/imgs/books_index.webp'
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
            <img src={bookCover} className='book-cover' alt="" width={1000} />
          </div>
        </section>
        <section id="categories">
          <h3 className='blue-title'>Categorias</h3>
          <div>
            <CategoryCard categoryLink={"Riojanos"} bg_img='/assets/imgs/riojanos.jpg' title1={"Autores"} title2={"Riojanos"} />
            <CategoryCard categoryLink={"Clásicos"} bg_img='/assets/imgs/classic.jpg' title1={"Libros"} title2={"Clásicos"} />
            <CategoryCard categoryLink={"Infantil-Juvenil"} bg_img='/assets/imgs/kids.jpg' title1={"Libros"} title2={"Infantiles"} />
          </div>
        </section>
        <section id="ruleta-index">
          <div id='title-ruleta'>
            <div className="yellow-dot"></div>
            <h1>Ruleta de la Literatura</h1>
            <div className="yellow-dot"></div>
          </div>
          <div id="bottom">
            <div id="book1"></div>
            <NavLink to={'/ruleta'} className="blue ruleta">Juega Ahora</NavLink>
            <div id="ruleta1"></div>
          </div>
        </section>
        <section id="qagame-index">
          <div id="qagame-index-left">
            <h1>Trivia Literaria</h1>
            <NavLink to={'/qagame'} className='red' style={{ padding: '10px 20px' }}>Juega Ahora</NavLink>
          </div>
          <div id="qagame-index-right"></div>
        </section>
      </main>
    </>
  )
}
