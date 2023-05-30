import Carousel from 'react-bootstrap/Carousel';

function Carrossel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="imagem1"
          src="https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Acessórios</h3>
          <p>Os melhores acessórios do mundo do surf.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imagem2"
          src="https://images.pexels.com/photos/1494720/pexels-photo-1494720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />

        <Carousel.Caption>
          <h3>Pranchas</h3>
          <p>As pranchas com mais qualidade do mercado.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imagem3"
          src="https://images.pexels.com/photos/7862/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Roupas</h3>
          <p>
            Roupas confortaveis e estilosas para você pegar aquela onda.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;