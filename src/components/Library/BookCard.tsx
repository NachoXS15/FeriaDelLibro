export interface BookCardProps {
    titulo: string
    autor: string
    year_release: number
    desc: string
    category: string
    imgUrl: string
    qr: string
}

export default function BookCard({titulo, autor, year_release, imgUrl}: BookCardProps){
    return(
        <>
            <div>
                <img src={imgUrl} alt="no-disponible" width={300} />
                <h3>{titulo}</h3>
                <h3>{autor}</h3>
                <h4>{year_release}</h4>
            </div>
        </>
    )
}