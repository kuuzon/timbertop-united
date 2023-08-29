// LOCAL MODULES
import * as styles from './Layout.css';
import { lightTheme, darkTheme } from '../../styles/themes.css';
import Header from "./Header"
import Footer from './Footer'

import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';

const Layout = ({ cartProducts }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div className={`${styles.app} ${isDarkTheme ? darkTheme : lightTheme}`}>
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
      <Header cartProducts={cartProducts} />
      <div className={styles.appContent}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout