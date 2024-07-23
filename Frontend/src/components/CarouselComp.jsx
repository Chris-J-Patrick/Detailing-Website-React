import { Container, Carousel, CarouselItem } from "react-bootstrap";

function CarouselComp() {
  return (
    <Container className="text-center">
      <Carousel data-bs-theme="dark" className="">
        <Carousel.Item>
          <img
            width="700px"
            src="../../beforeafter.jpg"
            className="img-fluid rounded-5"
            alt="beforeandafter"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="../../beforeafter3.jpg"
            width="700px"
            className="img-fluid rounded-5"
            alt="beforeandafter"
          />
        </Carousel.Item>
        <CarouselItem>
          <img
            src="../../beforeafter2.jpg"
            width="700px"
            className="img-fluid rounded-5"
            alt="beforeandafter"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="../../beforeafter4.jpg"
            width="700px"
            className="img-fluid rounded-5"
            alt="beforeandafter"
          />
        </CarouselItem>
      </Carousel>
    </Container>
  );
}
export default CarouselComp;
