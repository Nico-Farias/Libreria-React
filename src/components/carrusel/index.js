import Carousel from 'react-bootstrap/Carousel';




export default function Carrusel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="img/baneer.png"
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="img/banner1.png"
                    alt="Second slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="img/banner2.png"
                    alt="Third slide"
                />


            </Carousel.Item>
        </Carousel>
    );
}

