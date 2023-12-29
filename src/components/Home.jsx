import { Link } from "react-router-dom"
import './index.css'
export const Home = () => {
  return (
    <div className="home">
      <div>Home</div>
      <Link to='/birthday'> Birthday </Link>
      <br />
      <Link to='/tours'> Tours </Link>
    </div>
  )
}
