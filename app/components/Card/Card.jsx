import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from './card.module.css'; // Importa o CSS como módulo

function GridExample() {
  const cardData = [
    {
      title: 'Cuidados Essenciais e Manutenção Eficiente',
      imgSrc: 'https://i.imgur.com/bisUOEZ.png', // Tamanho da imagem ajustado
    },
    {
      title: 'Métodos Inovadores para Aplicações Perfeitas',
      imgSrc: 'https://i.imgur.com/iowOIAR.png',
    },
    {
      title: 'Design Sob Medida para Você',
      imgSrc: 'https://i.imgur.com/k9p5rzw.png',
    },
  ];

  return (
    <Row xs={1} md={3} className="g-2"> {/* Menor espaçamento com `g-2` */}
      {cardData.map((card, idx) => (
        <Col key={idx}>
          <Card className={styles.smallCard}> {/* Usa classe do módulo CSS */}
            <Card.Img variant="top" src={card.imgSrc} />
            <Card.Body>
              <Card.Title className={styles.title}>{card.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;
