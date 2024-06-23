import { useState } from "react";
import Phrases from "../../config/Phrases";
import ruletaWheel from '/assets/imgs/arrow_shape.webp';

type Book = {
    titulo: string;
    autor: string;
    category: string;
    phrases: Record<number, string | undefined>;
    qr: string;
};

export default function SpinRuleta() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [selectedPhrase, setSelectedPhrase] = useState<string | null>(null);
    const 

    const handleSpin = () => {
        // Seleccionar una categoría aleatoria
        const categories = [...new Set(Phrases.map(book => book.category))];
        console.log(categories);
        const randomCategoryIndex = Math.floor(Math.random() * categories.length);
        const randomCategory = categories[randomCategoryIndex];
        setSelectedCategory(randomCategory);
        

        const booksCategory = Phrases.filter(book => book.category === randomCategory);
        const randomBookIndex = Math.floor(Math.random() * booksCategory.length);
        const bookSelected = booksCategory[randomBookIndex];
        setSelectedBook(bookSelected);

        const phraseBook = bookSelected.phrases;
        const phraseEntries = Object.entries(phraseBook);
        const randomEntryPhrase = phraseEntries[Math.floor(Math.random() * phraseEntries.length)];
        const randomPhrase = randomEntryPhrase[1];
        setSelectedPhrase(randomPhrase)

    };

    return (
        <>
            <img src={ruletaWheel} alt="" width={500} />
            <button className='violet' onClick={handleSpin}>GIRAR</button>
            {selectedCategory && <p>Categoría seleccionada: {selectedCategory}</p>}
            {selectedBook && <p>Libro seleccionado: {selectedBook.titulo}</p>}
            {selectedPhrase && <p>Frase seleccionada: {selectedPhrase}</p>}
        </>
    );
}