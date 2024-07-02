import {
  Container,
  Row,
  Col,
  Alert,
  Button,
  Card,
  Carousel,
  CarouselItem,
} from "react-bootstrap";

function CarouselComp() {
  return (
    <Container className="my-0">
      <Carousel>
        <Carousel.Item>
          <img
            width="500px"
            src="../../beforeafter.jpg"
            className="img-fluid rounded-5"
            alt="beforeandafter"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="../../beforeafter3.jpg"
            width="500px"
            className="img-fluid rounded-5"
            alt="beforeandafter"
          />
        </Carousel.Item>
        <CarouselItem>
          <img
            src="../../beforeafter2.jpg"
            width="500px"
            className="img-fluid rounded-5"
            alt="beforeandafter"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="../../beforeafter4.jpg"
            width="500px"
            className="img-fluid rounded-5"
            alt="beforeandafter"
          />
        </CarouselItem>
      </Carousel>
    </Container>
  );
}
export default CarouselComp;
