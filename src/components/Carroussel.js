import React from 'react'
import { Carousel } from 'react-bootstrap'
import photoOne from "../images/one.jpg"
import phototwo from "../images/three.jpg"
import photothree from "../images/two.jpg"
const carroussel = () => {
  return (
    <div>
             <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={photoOne}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Los Angeles Tours</h3>
                    <p>Tour Los Angeles with a Local Guide</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={phototwo}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={photothree}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>

    </div>
  )
}

export default carroussel