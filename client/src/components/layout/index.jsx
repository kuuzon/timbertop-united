import { Outlet } from 'react-router-dom';

// LOCAL MODULES
import Header from "./Header"
import Footer from './Footer'

const Layout = () => {
  return (
    <div className="app">
      <Header />
      {/* Wrap all content in column-direction flexbox */}
      <div className="appContent">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout