import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './routes/Register'
import Header from './components/header/Header'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
