import { useState } from 'react'
import './App.css'
import Buttons from './Buttons'
import Footer from './Footer'
import Info from './Info'
import Name from './Name'
import Photo from './Photo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Photo />
      <Name />
      <Buttons />
      <Info />
      <Footer />
    </>
  )
}

export default App
