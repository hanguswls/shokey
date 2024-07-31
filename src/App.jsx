import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './routes/Register'
import Header from './components/header/Header'
import Main from './routes/Main'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
