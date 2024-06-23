import { useState } from "react";
import Phrases from "../../config/Phrases";
import ruletaWheel from '/assets/imgs/arrow_shape.webp';
import PhraseModal from "./PhraseModal";

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
    const [isModalOpen, setModalOpen] = useState<boolean>(false)

    const handleSpin = () => {
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

        setModalOpen(true)
    };

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <>
            <img src={ruletaWheel} alt="" width={500} />
            <button className='violet' onClick={handleSpin}>GIRAR</button>
            <PhraseModal
                isOpen={isModalOpen}
                onClose={closeModal}
                content={
                    <>
                        <h1>¡Excelente!</h1>
                        <h3>Tu Giro en la Ruleta de la Literatura te ha llevado a un gran libro. ¡Felicidaes!</h3>
                        <hr />
                        <div className="modal-phrase-info">
                            {selectedCategory && <h4>Categoría: <span>{selectedCategory}</span></h4>}
                            {selectedBook && <h4>Libro: <span>{selectedBook.titulo}</span></h4>}
                            {selectedPhrase && <h4>Frase: <span>"{selectedPhrase}"</span></h4>}
                        </div>
                    </>
                }
            />
        </>
    );
}