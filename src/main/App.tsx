import './styles.scss'
import logo from './assets/images/raw-logo.png'
import fonte from './assets/images/fonte.png'
import Envelope from './assets/images/envelope.svg'

const App: React.FC = () => {
  return (
    <>
      <p className="teste">Olá, pessoal!!</p>
      <img src={logo} />
      <img src={fonte} />
      <Envelope />
    </>
  )
}

export default App
