import './index.css'
import { Link, useNavigate } from 'react-router-dom'
import MyButton from '../../components/MyButton'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className='Home'>
      <h1>Home</h1>
      {/* <Link to='/profile'>自我介紹</Link> */}

      <MyButton
        onClick={() => {
          navigate('/profile')
        }}
      >
        <p>自我介紹</p>
        <h1>安安</h1>
      </MyButton>
    </div>
  )
}

export default Home
