import React from 'react'
import { Link } from "react-router-dom";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col
  } from "reactstrap";

const Event = ({ events }) => {
  return (
    <Row>
      {events.map((event) => (
        <Col lg="4" md="6">
        <Card className="bg-default shadow">
        <Link to={"../admin/events-edit-event/" + event.id}>
          <CardHeader className="bg-transparent border-0">
            <Row className="align-items-center">
              <Col xs="8">
                <h4 className="text-white mb-0">{event.nom}</h4>
              </Col>
              <Col className="text-right" xs="4">
                <h6 className="text-white mb-0">{event.date}</h6>
              </Col>
            </Row>
          </CardHeader>
        </Link>
        <CardBody>
          <Card className="bg-default shadow">
            <img
              alt={require("../../assets/img/theme/events-card.jpg")}
              src={event.photo}
            />
          </Card>
        </CardBody>
      </Card>
      </Col>
      ))}
    </Row>
  )
};

export default Event