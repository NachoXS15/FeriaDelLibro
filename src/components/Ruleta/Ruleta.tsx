import '../../styles/Ruleta.scss'

export default function Ruleta() {
    return (
        <>
            <div className="wheel">
                <div className="segment" style={{ '--rotate': '0deg', '--color': '#ff6b6b' } as React.CSSProperties}>Teatro</div>
                <div className="segment" style={{ '--rotate': '45deg', '--color': '#48dbfb' } as React.CSSProperties}>Policial</div>
                <div className="segment" style={{ '--rotate': '90deg', '--color': '#ff9ff3' } as React.CSSProperties}>Clasico</div>
                <div className="segment" style={{ '--rotate': '135deg', '--color': '#00d2d3' } as React.CSSProperties}>Lit Argentina</div>
                <div className="segment" style={{ '--rotate': '180deg', '--color': '#10ac84' } as React.CSSProperties}>Infantil</div>
                <div className="segment" style={{ '--rotate': '225deg', '--color': '#feca57' } as React.CSSProperties}>Filosofía</div>
                <div className="segment" style={{ '--rotate': '270deg', '--color': '#5f27cd' } as React.CSSProperties}>Fantasíco</div>
                <div className="segment" style={{ '--rotate': '315deg', '--color': '#f368e0' } as React.CSSProperties}>Ciencia Fic</div>
            </div>

        </>
    )
}
