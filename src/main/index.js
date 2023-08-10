// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './styles.scss'
import image from './raw-logo.png'

document.querySelector(
  '#root'
).innerHTML = `O número da porta é ${process.env.PORT}`

const pic = document.createElement('img')
pic.src = image

document.querySelector('body').appendChild(pic)
