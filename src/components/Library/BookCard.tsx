import { BookCardProps } from "../../config/types/BookCardProps"

interface BookModalProps extends BookCardProps{
    onBookClick: (book: BookCardProps) => void;
}

export default function BookCard({id, titulo, autor, desc, qr, category, year_release, imgUrl, onBookClick}: BookModalProps){
    return(
        <>
            <div className="book-card" onClick={() => onBookClick({id, titulo, year_release, autor, desc, imgUrl, qr, category})}>
                <img src={imgUrl} alt="no-disponible" width={300} />
                <h2>{titulo}</h2>
                <h3>{autor}</h3>
                <h4>{year_release}</h4>
            </div>
        </>
    )
}