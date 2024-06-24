import BookCard from './BookCard'
import Books from '../../config/Books'
import { useEffect, useState } from 'react'
type LibraryProps = {
    categorySelected: string
}
export default function Library({ categorySelected }: LibraryProps) {
    
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
                        <BookCard key={index} {...book} />
                    ))
                ) : (
                    <h2>No se encontraron libros para esta categoria</h2>
                )}
            </div>
        </>
    )
}