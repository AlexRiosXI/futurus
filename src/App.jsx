import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './modules/auth/login/login'
import { NextUIProvider } from '@nextui-org/react'
import Dashboard from './components/structure/dashboard/dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NextUIProvider>
        <main
        className='box-border'
        >
     <Dashboard />
     </main>
     </NextUIProvider>
    </>
  )
}

export default App
