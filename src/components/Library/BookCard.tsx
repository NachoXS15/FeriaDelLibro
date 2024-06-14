

export default function BookCard(props: Book){
    return(
        <>
            <div>
                <h1>{props.Nombre}</h1>
                <h3>{props.Categoria}</h3>
                <h3>{props.Autor}</h3>
                <h4>caca</h4>
            </div>
        </>
    )
}