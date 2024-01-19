import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <Link to="/Faq">
          <h1>Faq</h1>
        </Link>
        <Link to="/Contact">
          <h1>Contact</h1>
        </Link>
        <Link to="/About">
          <h1>About</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar