import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className="navigation">
      <h1 className='navigation__logo'><span>i</span>Techies</h1>
      <ul className='navigation__links'>
        <li>
          <a href='/'>Developers</a>
        </li>
        <li>
          <a href='/'>Register</a>
        </li>
        <li>
          <a href='/'>Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar