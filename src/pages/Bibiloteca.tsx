import '../styles/library.scss'
import { useEffect, useState } from 'react';
import Library from "../components/Library/LibraryItems";
import Header from "../components/ui/Header";
import Categories from "../config/Categories";
import { NavLink, useParams} from 'react-router-dom';
import { ArrowBack } from '../components/ui/svgs';
import { BookCardProps } from '../config/types/BookCardProps';
import BookModal from '../components/Library/BookModal';
import LibraryProp from '../config/types/LibraryProp';

export default function Biblioteca({categoryProp}: LibraryProp) {
  const {id} = useParams()
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [categorySelected, setCategorySelected] = useState<string>(id || categoryProp || "Clásicos")
  const [selectedBook, setSelectedBook] = useState<BookCardProps | null>(null);
  console.log("categoria: ", categorySelected);

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [categorySelected])

  const handleCategorySelected = (c: string) => {
    setCategorySelected(c)
    console.log("categoria: ", categorySelected);
  }

  const handleBookClick = (book: BookCardProps) => {
    setSelectedBook(book);
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setSelectedBook(null);
  };

  return (
    <>
      <Header />
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 40px' }}>
        <NavLink to={'/'}>
          <ArrowBack />
        </NavLink>
        <h2 className='blue-title'>Biblioteca Digital</h2>
      </div>
      <section id="library-container">
        <aside>
          <div>
            {Categories.map((c, i) => (
              <button key={i} onClick={() => handleCategorySelected(c)} className={categorySelected === c ? 'active' : ''}>{c}</button>
            ))}
          </div>
        </aside>
        <Library categorySelected={categorySelected} onBookClick={handleBookClick} />
      </section>
      {isOpenModal && selectedBook && (
        <BookModal onClose={closeModal}>
          <div style={{backgroundImage: `url(${selectedBook.imgUrl})`}} className='modal-img'></div>
          <div className='modal-info'>
            <h2>{selectedBook.titulo}</h2>
            <h3><strong>Autor: </strong>{selectedBook.autor}</h3>
            <h4 style={{marginBottom: '1em'}}><strong>Año de lanzamiento: </strong>{selectedBook.year_release}</h4>
            <p><strong>Sinopsis: </strong>{selectedBook.desc}</p>
          </div>
          <div className='modal-download'>
            <h4>Descargar este libro aquí</h4>
            <img src={selectedBook.qr} alt="" width={250} />
          </div>
        </BookModal>
      )}
    </>
  )
}