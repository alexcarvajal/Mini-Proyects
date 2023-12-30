import { Link } from "react-router-dom"
import './index.css'
export const Home = () => {
  return (
    <div className="home">
      <div>Home</div>
      <Link to='/birthday'> Birthday </Link>
      <br />
      <Link to='/tours'> Tours </Link>
      <br />
      <Link to='/reviews'> Reviews </Link>
      <br />
      <Link to='/questions'> Questions </Link>
      <br />
      <Link to='/menu'> Menú </Link>
    </div>
  )
}
