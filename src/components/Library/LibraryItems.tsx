import BookCard from './BookCard'
import Books from '../../config/Books'

type LibraryProps = {
    categorySelected: string
}
export default function Library({ categorySelected }: LibraryProps) {

    const filteredBooks = categorySelected === "Todos" ? Books : Books.filter(book => book.category === categorySelected)
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