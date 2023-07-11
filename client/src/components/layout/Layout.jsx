import { Outlet } from 'react-router-dom';
import * as styles from './Layout.css';

// LOCAL MODULES
import Header from "./Header"
import Footer from './Footer'

const Layout = () => {
  return (
    <div className={styles.app}>
      <Header />
      {/* Wrap all content in column-direction flexbox */}
      <div className={styles.appContent}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout