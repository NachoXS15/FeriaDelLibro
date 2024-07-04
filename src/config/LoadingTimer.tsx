import logo from '/assets/imgs/logo.png'
import '../styles/Loading.scss'
export default function LoadingTimer() {
  
  return(
    <main className='loading'>
      <div>
        <img src={logo} width={600} className='load' alt="" />
      </div>
    </main>
  )
}
