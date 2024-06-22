import BookCard from './BookCard'
import Books from '../../config/Books'
export default function Library() {
    return (
        <>
            <div id='book-section'>
                {Books.map((b, i) => (
                    <BookCard key={i} {...b} />
                ))}
            </div>
        </>
    )
}