type Modal = {
  isOpen: boolean
  onClose: () => void;
  content: React.ReactNode
}

export default function PhraseModal({ isOpen, onClose, content }: Modal) {
  if (!isOpen) return null

  return (
    <>
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-info">
            {content}
          </div>
        </div>
      </div>
    </>
  )
}
