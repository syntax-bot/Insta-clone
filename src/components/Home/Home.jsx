import './Home.css'
import Post from './Post'
import Stories from './Stories'
export default function Home() {
  return (
    <div className='Home'>
      <Stories/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}
