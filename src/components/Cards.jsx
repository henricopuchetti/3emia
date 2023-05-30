import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const servicos = [
  {
    titulo: "Acessórios",
    preco: "R$20,00",
    texto: "lorem",
    img: "https://cdn.awsli.com.br/600x700/198/198016/produto/101677836/bf2a3246a6.jpg"
  },
  {
    titulo: "pranchas",
    preco: "R$230,00",
    texto: "lorem",
    img: "https://www.seaclubshop.com.br/image/cache/catalog/rocketsol-800x800.jpg"
  },
  {
    titulo: "roupas",
    preco: "R$100,00",
    texto: "lorem",
    img: "https://images.tcdn.com.br/img/img_prod/699461/180_long_john_vissla_seven_seas_3_2mm_black_1967_1_73ab5c25cde63449e950199313bedcb4.jpg"
  }

]

function Cards() {
  return (
    <CardGroup>
      {servicos.map(({titulo, preco, texto, img}) =>(
              <Card key ={titulo}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>
                  {texto}
                  {preco}
                </Card.Text>
              </Card.Body>
            </Card>
      ))}
      {/* <Card>
        <Card.Img variant="top" src="https://cdn.awsli.com.br/600x700/198/198016/produto/101677836/bf2a3246a6.jpg" />
        <Card.Body>
          <Card.Title>Acessórios</Card.Title>
          <Card.Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ut suscipit qui! Eligendi distinctio aliquid, reprehenderit ipsa incidunt magnam, voluptas cupiditate dicta excepturi ex quas minima omnis error cum alias.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.seaclubshop.com.br/image/cache/catalog/rocketsol-800x800.jpg" />
        <Card.Body>
          <Card.Title>Pranchas</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas inventore veritatis voluptatibus, et commodi unde suscipit minima labore, recusandae delectus obcaecati. Odio asperiores dolorum facere? Sequi voluptate eos quod eaque!.{' '}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.tcdn.com.br/img/img_prod/699461/180_long_john_vissla_seven_seas_3_2mm_black_1967_1_73ab5c25cde63449e950199313bedcb4.jpg" />
        <Card.Body>
          <Card.Title>Roupas</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat beatae, labore a dolorem qui saepe! Omnis saepe aliquam itaque sapiente ad? Alias quae repudiandae sapiente in ab nobis vitae repellendus!.
          </Card.Text>
        </Card.Body>
      </Card> */}
    </CardGroup>
  );
}

export default Cards;