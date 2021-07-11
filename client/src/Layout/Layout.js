import Landing from "../components/Layout/Landing/Landing"
import Navbar from "../components/Layout/Navbar/Navbar"

import './Layout.scss'

const Layout = () => {
  return (
    <div className='layout'>
      <Navbar />
      <Landing />
    </div>
  );
}

export default Layout