import { useState } from "react";
import Phrases from "../../config/Phrases";
import PhraseModal from "./PhraseModal";
import { RuletaProps } from "../../config/types/RuletaProps";


export default function SpinRuleta() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedBook, setSelectedBook] = useState<RuletaProps | null>(null);
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
            <img src="/assets/imgs/arrow_wheel.webp" alt="" width={500} />
            <button className='violet' onClick={handleSpin}>GIRAR</button>
            <PhraseModal
                isOpen={isModalOpen}
                onClose={closeModal}
                content={
                    <>
                        <h2 style={{fontSize: '0.7em'}}>¡Excelente!</h2>
                        <h4>Tu Giro en la Ruleta de la Literatura te ha llevado a un gran libro. ¡Felicidades!</h4>
                        <hr />
                        <div className="modal-phrase-info">
                            {selectedCategory && selectedBook && <h5><strong>Libro:</strong> <span>{selectedBook.titulo}<strong> | Categoría:</strong> <span>{selectedCategory}</span></span></h5>}
                            {selectedPhrase && <h3 className={selectedPhrase.length < 140 ? 'phrase-small' : 'phrase-big'}><span>"{selectedPhrase}"</span></h3>}
                        </div>
                    </>
                }
            ></PhraseModal>
        </>
    );
}