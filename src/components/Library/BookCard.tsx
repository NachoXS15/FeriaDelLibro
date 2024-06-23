import { NavLink } from "react-router-dom"

export interface BookCardProps {
    id: number
    titulo: string
    autor: string
    year_release: string
    desc: string
    category: string
    imgUrl: string
    qr: string
}

export default function BookCard({id, titulo, autor, year_release, imgUrl}: BookCardProps){
    return(
        <>
            <div>
                <NavLink to={`/library/${id}`}><img src={imgUrl} alt="no-disponible" width={300} /></NavLink>
                <h2>{titulo}</h2>
                <h3>{autor}</h3>
                <h4>{year_release}</h4>
            </div>
        </>
    )
}