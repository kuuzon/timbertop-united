// Import npm packages
import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from "react-bootstrap";
import { RiShoppingCartFill } from 'react-icons/ri';
import logoImg from '../../assets/images/timbertop-icon.png'
import { Within } from "@theme-toggles/react"

// Import custom modules
import * as styles from './Header.css';
import useAuth from '../../hooks/useAuth';
import TuButton from '../common/TuButton';
import TuLink from '../common/TuLink';
import ProductCart from '../features/cart/ProductCart';

const Header = ({ cartProducts, handleToggleTheme }) => {
  const { user, logout } = useAuth();
  // CART OFFCANVAS
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Navbar className={styles.navbar} variant="light" expand="lg" sticky="top" >
        <Container>
          <Navbar.Brand className={styles.brandLink} as={Link} to="/">
            <img className={styles.logo} src={logoImg} alt="timbertop united logo" />
            <div className={styles.logoTextBox}>
              <span className={styles.brand}>Timbertop United</span>
              <span className={styles.brandSub}>The Official Online Store</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle className={styles.hamburgerBtn}aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="text-center" id="responsive-navbar-nav" >
            {/* STANDARD NAVLINKS */}
            <Nav className="me-auto">
              <Nav.Link className={styles.navLink} as={Link} to="/store/products">Products</Nav.Link>
              <Nav.Link className={styles.navLink} as={Link} to="/store/sale">Sale</Nav.Link>
            </Nav>
            {/* AUTH NAVLINKS */}
            <Nav className={styles.buttonNav}>
              <Within 
                className={styles.themeToggleBtn}
                duration={750} 
                onToggle={() => { handleToggleTheme() }}
              />
              {!user && <TuLink mdLink={true} to="/signup" >Sign&nbsp;Up</TuLink>}
              {!user && <TuLink mdLink={true} to="/login"  >Log&nbsp;In</TuLink>}
              {user && <TuLink mdLink={true} to="/dashboard" >Dashboard</TuLink>}
              {user && <TuButton mdBtn={true} onClick={() => { logout() }}  >Logout</TuButton>}
              {<TuButton mdBtn={true} onClick={handleShow} ><RiShoppingCartFill /></TuButton>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ProductCart 
        show={show} 
        handleClose={handleClose} 
        cartProducts={cartProducts} 
      />
    </Fragment>
  )
}

export default Header