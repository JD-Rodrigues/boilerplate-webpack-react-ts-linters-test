// eslint-disable-next-line @typescript-eslint/no-unused-vars
import path from 'path'
import './styles.scss'
import './assets/assetsImporter'

// eslint-disable-next-line @typescript-eslint/no-unused-vars

document.querySelector(
  '#root'
)!.innerHTML = `O número da porta é ${process.env.PORT}`

const pic = document.createElement('img')
pic.src = './assets/images/raw-logo.png'

document.querySelector('body')!.appendChild(pic)
