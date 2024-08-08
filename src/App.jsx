import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './routes/Register'
import Header from './components/header/Header'
import Main from './routes/Main'
import Footer from './components/footer/Footer'
import Login from './routes/Login'
import useRefresh from './hooks/useRefresh'
import CreatePost from './routes/CreatePost'
import Posts from './routes/Posts'
import ViewMyInfluencer from './routes/ViewMyInfluencer'
import ViewInfluencer from './routes/ViewInfluencer'
import RegisterInfluencer from './routes/RegisterInfluencer'
import UpdateInfluencer from './routes/UpdateInfluencer'

function App() {
	useRefresh();

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/posts' element={<Posts />} />
				<Route path='/upload' element={<CreatePost />} />
        <Route path='/register-influencer' element={<RegisterInfluencer />}></Route>
        <Route path='/update-influencer' element={<UpdateInfluencer />}></Route>
        <Route path='/my-influencer' element={<ViewMyInfluencer />}></Route>
        <Route path='/influencer/:id' element={<ViewInfluencer />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
