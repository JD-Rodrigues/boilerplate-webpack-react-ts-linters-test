// eslint-disable-next-line @typescript-eslint/no-unused-vars
import path from 'path'
import React from 'react'
import './styles.scss'
import './assets/assetsImporter'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

const root = createRoot(document.querySelector('#root')!)

root.render(<App />)
