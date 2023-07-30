import * as styles from './Layout.css';
import { Outlet } from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';

// LOCAL MODULES
import Header from "./Header"
import Footer from './Footer'

const Layout = ({ products }) => {
  return (
    <div className={styles.app}>
      {/* TOAST is a popup component to display Errors */}
      <ToastContainer 
        style={{ textAlign: "center" }} 
        position='top-center'
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        transition={Slide}
        theme="colored"
      />
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