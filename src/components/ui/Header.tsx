import sol from '/assets/imgs/sol.png'
import logo from '/assets/imgs/logo.png'
import '../../styles/main.scss'

function Header() {
  return (
    <>
      <header>
        <img src={sol} alt="" width={250} />
        <h2 style={{fontFamily: 'Gotham'}}>Feria del Libro - 2024</h2>
        <img src={logo} alt="" width={250} />
      </header>
    </>
  )
}

export default Header