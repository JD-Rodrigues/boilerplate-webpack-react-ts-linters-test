import styles from './styles.module.scss'
import logo from '@images/raw-logo.png'
import fonte from '@images/fonte.png'
// eslint-disable-next-line import/no-duplicates
import { ReactComponent as Envelope } from '@images/envelope.svg'
// eslint-disable-next-line import/no-duplicates
import envelope from '@images/envelope.svg'
import ButtonExample from '@components/Button/index.tsx'

const App: React.FC = () => {
  return (
    <>
      <p
        className={styles.teste}
      >{`Olá, pessoal!! O número da porta é este: ${process.env.PORT}.`}</p>
      <ButtonExample />
      <img alt="" src={logo} />
      <img alt="" src={envelope} />
      {/* svg path inserted in src img attribute */}
      <img alt="" src={fonte} />
      <Envelope /> {/* svg inserted as React Component */}
    </>
  )
}

export default App
