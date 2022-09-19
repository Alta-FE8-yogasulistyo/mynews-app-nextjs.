import { Button, Card, Container, Col, Row } from "react-bootstrap";
import React from "react";
import Image from "next/image";
import Router from "next/router";

const CardCom = ({ news, goDetail }) => {
  return (
    <Container>
      <Row xxl={4} xl={4} lg={4} md={2}>
        {news.map((data, index) => {
          return (
            <div key={index}>
              <Col>
                <Card className="mb-3 mt-4" style={{ width: "18rem" }}>
                  <Card.Img height={200} variant="top" src={data.imageUrl} />

                  <Card.Body>
                    <Card.Title className="ms-2 ">{data.title}</Card.Title>
                    <Card.Text className="ms-2">{data.author}</Card.Text>
                    <Button onClick={() => goDetail(data)} variant="primary" className="ms-2 mb-2">
                      READ MORE!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          );
        })}
      </Row>
    </Container>
  );
};

export default CardCom;
