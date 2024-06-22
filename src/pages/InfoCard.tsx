import Books from "../config/Books"
import { useState, useEffect } from "react"
import Header from "../components/ui/Header"
import { BookCardProps } from "../components/Library/BookCard"
import { useParams } from "react-router"
import { NavLink } from "react-router-dom"
import { ArrowBack } from "../components/ui/svgs"

export default function InfoBookCard() {
  const [bookSelected, setbookSelected] = useState<BookCardProps>()
  const { id } = useParams();

  useEffect(() => {
    const getBook = () => {
      const BookId = Number(id)
      const book = Books.find(book => book.id == BookId)
      setbookSelected(book)
    }

    getBook();
  }, [id])


  return (
    <>
      <Header />
      <div style={{ display: 'flex', alignItems: 'center', margin: '10px 40px', gap: '10px' }}>
        <NavLink to={'/library'}>
          <ArrowBack />
        </NavLink>
        <h2 className="blue-title">Biblioteca Digital</h2>
      </div>
      <main id="book-info">
        <div>
          <img src={bookSelected?.imgUrl} className="info-img" alt="" width={500} />
        </div>
        <div>
          <h2>{bookSelected?.titulo}</h2>
          <h3>{bookSelected?.autor}</h3>
          <p>{bookSelected?.desc}</p>
        </div>
      </main>
    </>
  )
}
