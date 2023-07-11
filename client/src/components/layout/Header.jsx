// Import npm packages
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from "react-bootstrap";
import { RiExchangeFundsLine } from 'react-icons/ri';

// Import custom modules
import * as styles from './Header.css';
import useAuth from '../../hooks/useAuth';
// import CXButton from '../../components/common/CXButton';
// import CXNavLink from '../common/CXNavLink';

const Header = ({ toggleTheme }) => {
  const { user, logout } = useAuth();

  return (
    <Navbar className={styles.navbar} variant="light" expand="lg" sticky="top" >
      <Container>
        <Navbar.Brand className={styles.navLink} as={Link} to="/">
          <RiExchangeFundsLine className={styles.logo} />
          {' '}
          <span className={styles.brand}>Timbertop United</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          {/* STANDARD NAVLINKS */}
          <Nav className="me-auto">
            <Nav.Link className={styles.navLink} as={Link} to="/about">About</Nav.Link>
            <Nav.Link className={styles.navLink} as={Link} to="/currency/prices">CBDC</Nav.Link>
            <Nav.Link className={styles.navLink} as={Link} to="/crypto/prices">Crypto</Nav.Link>
          </Nav>
          {/* AUTH NAVLINKS */}
          <Nav>
            <span>nice</span>
            {/* <CXButton onClick={() => { toggleTheme() }} navbar>Theme</CXButton>
            {!user && <CXNavLink to="/signup" navbar>Sign&nbsp;Up</CXNavLink>}
            {!user && <CXNavLink to="/login" outline navbar>Log&nbsp;In</CXNavLink>}
            {user && <CXNavLink to="/dashboard" navbar>Dashboard</CXNavLink>}
            {user && <CXButton onClick={() => { logout() }} outline navbar>Logout</CXButton>} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header