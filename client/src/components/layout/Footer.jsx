import * as styles from "./Footer.css";

const Footer = () => {
  // Dynamic Date Function
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className={styles.footer}>
      &copy; {getCurrentYear()} CentralX
    </div>
  )
}

export default Footer