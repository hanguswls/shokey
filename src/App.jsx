import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './routes/Register'
import Header from './components/header/Header'
import Main from './routes/Main'
import Footer from './components/footer/Footer'
import Login from './routes/Login'
import useRefresh from './hooks/useRefresh'

function App() {
	useRefresh();

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
