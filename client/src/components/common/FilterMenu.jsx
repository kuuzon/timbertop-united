import * as styles from './FilterMenu.css'
import TuLink from "./TuLink";

function FilterMenu({ productLinks }) {
  return (
    <div className={styles.menuContainer}>
      <TuLink mdLink outline to={'/store/products'}>All</TuLink>
      {productLinks.map(link => (
        <TuLink key={`link-${link}`} mdLink outline to={`/store/products/${link}`}>{link}</TuLink>
      ))}
    </div>
  )
}

export default FilterMenu