import SpinRuleta from "../components/Ruleta/SpinRuleta";
import Header from "../components/ui/Header";
import '../styles/Ruleta.scss'
import '../styles/buttons.scss'
export default function Ruleta() {
    return (
      <>
        <Header />
        <section id="ruleta-main">
          <div id="title" className="violet" style={{display: 'flex', justifyContent: 'space-around', alignItems: "center"}}>
            <div className="yellow-dot"></div>
            <h2>RULETA LITERARIA</h2>
            <div className="yellow-dot"></div>
          </div>
          <SpinRuleta />
        </section>
      </>
    )
  }
  