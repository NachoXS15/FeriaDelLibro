import Books from "../config/Books"
import { useState, useEffect } from "react"
import Header from "../components/ui/Header"
import { BookCardProps } from "../components/Library/BookCard"
import { useParams } from "react-router"


export default function InfoBookCard() {
  const [bookSelected, setbookSelected] = useState<BookCardProps>()
  const { id } = useParams<{id: string}>();

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
      <h1 className="blue-title"></h1>
      <main>
        <h2>{bookSelected?.titulo}</h2>
        <h3></h3>
        <p></p>
      </main>
    </>
  )
}
