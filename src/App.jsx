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
import Search from './routes/Search'
import PostDetail from './routes/PostDetail'
import UpdateUser from './routes/UpdateUser'
import ViewUser from './routes/ViewUser'
import ViewMyUser from './routes/ViewMyUser'
import useInitializeUser from './hooks/useInitializeUser'

function App() {
	useRefresh();
  useInitializeUser();

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/posts' element={<Posts />} />
				<Route path='/upload' element={<CreatePost />} />
				<Route path='/search' element={<Search />} />
				<Route path='/post/:id' element={<PostDetail />} />
        <Route path='/user/:id' element={<ViewUser />} />
				<Route path='/update-user' element={<UpdateUser />} />
				<Route path='/mypage' element={<ViewMyUser />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;