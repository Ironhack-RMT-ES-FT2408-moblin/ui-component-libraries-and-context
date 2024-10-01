
import { useContext } from "react";
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"

import Carousel from 'react-bootstrap/Carousel';
import { ThemeContext } from "../context/theme.context";

function Home() {

  const { isDarkTheme } = useContext(ThemeContext)

  return (
    <div>
      
      <h1>Welcome!</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <Carousel data-bs-theme={isDarkTheme ? "light" : "dark"}>
        <Carousel.Item>
          <img src={img1} alt="cover" width={120} height={200}/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img2} alt="cover" width={120} height={200}/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img3} alt="cover" width={120} height={200}/>
        </Carousel.Item>
      </Carousel>

    </div>
  )
}

export default Home