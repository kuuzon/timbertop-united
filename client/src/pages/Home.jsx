import Container from "react-bootstrap/Container"
import TuBox from "../components/common/TuBox"

const Home = () => {
  return (
    <Container>
      <TuBox 
        title="The Official Store for Timbertop United"
        content="Join Timbertop United's devoted fans with exclusive jerseys, scarves, and memorabilia. Unite and celebrate victories in style! "
        button="Shop Now"
      />
    </Container>
  )
}

export default Home