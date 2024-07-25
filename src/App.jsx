import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './routes/Register'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
