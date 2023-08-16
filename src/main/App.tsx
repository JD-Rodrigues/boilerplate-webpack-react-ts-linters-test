import './styles.scss'
import logo from './assets/images/raw-logo.png'
import fonte from './assets/images/fonte.png'
import { ReactComponent as Envelope }  from './assets/images/envelope.svg'
import envelope from './assets/images/envelope.svg'

const App: React.FC = () => {
  return (
    <>
      <p className="teste">Olá, pessoal!!</p>
      <img src={logo} />
      <img src={envelope} /> { /* svg path inserted in src img attribute */ }
      <img src={fonte} />
      <Envelope /> { /* svg inserted as React Component */ }
    </>
  )
}
 
export default App
