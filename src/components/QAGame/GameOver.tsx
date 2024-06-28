import "../../styles/qagame.scss"

type GameOverProps = {
    content: React.ReactNode
    isOpen: boolean
}

export default function GameOver({ isOpen, content }: GameOverProps) {

    if (!isOpen) return null

    return (
        <>
            <div className="modal-backdrop">
                <div className="modal-content-qa" onClick={e => e.stopPropagation()}>
                    <div className="modal-info">
                        {content}
                    </div>
                </div>
            </div>
        </>
    )
}
