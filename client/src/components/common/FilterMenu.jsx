import { Fragment } from "react"
import TuLink from "./TuLink";

function FilterMenu({ productLinks }) {
  return (
    <Fragment>
      <TuLink smLink outline to={'/store/products'}>All</TuLink>
      {productLinks.map(link => (
        <TuLink key={`link-${link}`} smLink outline to={`/store/products/${link}`}>{link}</TuLink>
      ))}
    </Fragment>
  )
}

export default FilterMenu