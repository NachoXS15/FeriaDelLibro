import sol from '/assets/imgs/sol.png'
import logo from '/assets/imgs/logo.png'
import '../../styles/main.scss'

function Header() {
  return (
    <>
      <header>
        <img src={sol} alt="" width={250} />
        <h2>Feria del Libro</h2>
        <img src={logo} alt="" width={250} />
      </header>
    </>
  )
}

export default Header