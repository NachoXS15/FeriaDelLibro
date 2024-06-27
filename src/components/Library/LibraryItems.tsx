import BookCard from './BookCard'
import Books from '../../config/Books'
import { useEffect, useState } from 'react'
import { BookCardProps } from '../../config/types/BookCardProps'
type LibraryProps = {
    categorySelected: string
    onBookClick: (book: BookCardProps) => void;
}
export default function Library({ categorySelected, onBookClick }: LibraryProps) {

    const [count, setCount] = useState(0)
    const filteredBooks = categorySelected === "Todos" ? Books : Books.filter(book => book.category === categorySelected)
    
    useEffect(() => {
        setCount(filteredBooks.length);
        console.log(count);
    }, [filteredBooks])
    return (
        <>
            <div id='book-section'>
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book, index) => (
                        <BookCard key={index} {...book} onBookClick={onBookClick} />
                    ))
                ) : (
                    <h2>No se encontraron libros para esta categoria</h2>
                )}
            </div>
        </>
    )
}