import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BugRF from './views/BugList'
import Nav from './views/Navbar'
import BugList from './views/BugList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './views/Dashboard'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path='/buglist' element={<BugList />} />
        </Routes>
      </BrowserRouter>

      {/* <BugList /> */}




    </>
  )
}

export default App
