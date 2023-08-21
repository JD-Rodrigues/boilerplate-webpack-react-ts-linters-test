import './styles.scss'
import logo from './assets/images/raw-logo.png'
import fonte from './assets/images/fonte.png'
// eslint-disable-next-line import/no-duplicates
import { ReactComponent as Envelope } from './assets/images/envelope.svg'
// eslint-disable-next-line import/no-duplicates
import envelope from './assets/images/envelope.svg'

const App: React.FC = () => {
  return (
    <>
      <p className="teste">{`Olá, pessoal!! O número da porta é este: ${process.env.PORT}.`}</p>
      <img alt="" src={logo} />
      <img alt="" src={envelope} />
      {/* svg path inserted in src img attribute */}
      <img alt="" src={fonte} />
      <Envelope /> {/* svg inserted as React Component */}
    </>
  )
}

export default App
