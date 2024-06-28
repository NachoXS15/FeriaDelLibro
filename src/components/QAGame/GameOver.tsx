import { NavLink } from "react-router-dom"

type GameOverProps = {
    content: React.ReactNode
    isOpen: boolean
}

export default function GameOver({ isOpen, content }: GameOverProps) {

    if (!isOpen) return null

    return (
        <>
            <div className="modal-backdrop">
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-info">
                        {content}
                        <NavLink to={'/qagame'}>Volver a empezar</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
