import { useEffect, useState } from 'react'
import BookCard from './BookCard'
import { app } from './config/firebase.config'
import { getDocs, getFirestore, collection } from "firebase/firestore"


export default function Library() {
    const [books, setBooks] = useState<Book[]>([]);
    const db = getFirestore(app);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getDocs(collection(db, 'Books'));
                const dataList = response.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                } as Book));
                setBooks(dataList);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, [db])



    return (
        <>
            {books.map((book, index) => {
                return(
                    <BookCard key={index} Nombre={book.Nombre} Categoria={book.Categoria} Autor={book.Autor} />
                )
            })}
        </>
    )
}
