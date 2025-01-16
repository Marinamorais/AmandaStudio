import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from './card.module.css'; // Importa o CSS como módulo

function GridExample() {
  const cardData = [
    {
      title: 'Cuidados Essenciais e Manutenção Eficiente',
      imgSrc: 'https://i.imgur.com/bisUOEZ.png',
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
    <div className={styles.raiz}>
      <Row xs={1} md={3} className="g-3"> {/* Define maior espaçamento entre os cards */}
        {cardData.map((card, idx) => (
          <Col key={idx}>
            <Card className={styles.smallCard}>
              <Card.Img variant="top" src={card.imgSrc} />
              <Card.Body>
                <Card.Title className={styles.title}>{card.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default GridExample;
