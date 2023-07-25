import { Outlet } from 'react-router-dom';
import * as styles from './Layout.css';

// LOCAL MODULES
import Header from "./Header"
import Footer from './Footer'

const Layout = ({ products }) => {
  return (
    <div className={styles.app}>
      <Header products={products} />
      {/* Wrap all content in column-direction flexbox */}
      <div className={styles.appContent}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout