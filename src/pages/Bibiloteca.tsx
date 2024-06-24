import '../styles/library.scss'
import { useState } from 'react';
import Library from "../components/Library/LibraryItems";
import Header from "../components/ui/Header";
import Categories from "../config/Categories";
import { NavLink } from 'react-router-dom';
import { ArrowBack } from '../components/ui/svgs';
import { BookCardProps } from '../config/BookCardProps';
import BookModal from '../components/Library/BookModal';
import QRCodeEx from '/assets/imgs/qr.webp'

export default function Biblioteca() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [categorySelected, setCategorySelected] = useState<string>("Todos")
  const [selectedBook, setSelectedBook] = useState<BookCardProps | null>(null);
  console.log("categoria: ", categorySelected);

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
          {Categories.map((c, i) => (
            <button key={i} onClick={() => handleCategorySelected(c)} className={categorySelected === c ? 'active' : ''}>{c}</button>
          ))}
        </aside>
        <Library categorySelected={categorySelected} onBookClick={handleBookClick} />
      </section>
      {isOpenModal && selectedBook && (
        <BookModal onClose={closeModal}>
          <div style={{backgroundImage: `url(${selectedBook.imgUrl})`}} className='modal-img'></div>
          <div className='modal-info'>
            <h2>{selectedBook.titulo}</h2>
            <h3>Autor: {selectedBook.autor}</h3>
            <p>{selectedBook.desc}</p>
          </div>
          <div className='modal-download'>
            <h4>Descargar este libro aquí</h4>
            <img src={QRCodeEx} alt="" width={250} />
          </div>
        </BookModal>
      )}
    </>
  )
}