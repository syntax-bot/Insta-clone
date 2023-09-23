import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import AddPost from './components/AddPost/AddPost'
import Reels from './components/Reels/Reels'
import Profile from './components/Profile/Profile'

function App() {
  return (
    <div className='app' >
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='search' element={<Search/>}/>
        <Route path='addpost' element={<AddPost/>}/>
        <Route path='reels' element={<Reels/>}/>
        <Route path='profile' element={<Profile/>}/>
      </Routes>  
    </div>
  )
}
export default App
