import { NavLink } from "react-router-dom";
import Header from "../components/ui/Header";
import '../styles/qagame.scss'

export default function Game() {
    return (
      <>
        <Header />
        <section id="qa-game">
          <div>
            <p>Para ganar debes de responder la mayor cantidad de preguntas de manera correcta en un tiempo limite ¡Muchos éxitos!</p>
            <NavLink to={'/qagame/play'} className="green">Comenzar</NavLink>
          </div>
        </section>
      </>
    )
  }
  