import React from 'react'

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  Container,
  Row,
  Col
  } from "reactstrap";

const User = ({ users }) => {
  return (
    <Container className="mt--7" fluid>
      {users.map((user) => (
      <Row>
        <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
        <Card className="card-profile shadow">
          <Row className="justify-content-center">
            <Col className="order-lg-2" lg="3">
              <div className="card-profile-image">
                  <img
                    alt="..."
                    className="rounded-circle"
                    src={require("../../assets/img/theme/ppf.jpg")}
                  />
              </div>
            </Col>
          </Row>
          <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></CardHeader>
          <CardBody className="pt-0 pt-md-4">
            <Row>
              <div className="col">
                <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                  <div>
                    <span className="heading">10</span>
                    <span className="description">Photos</span>
                  </div>
                </div>
              </div>
            </Row>
            <div className="text-center">
              <h3>
               {user.nom_client}
                <span className="font-weight-light">, 22</span>
              </h3>
              <div className="h5 font-weight-300">
                <i className="ni location_pin mr-2" />
                Lyon, France
              </div>
              <div className="h5 mt-4">
                <i className="ni business_briefcase-24 mr-2" />
                java engineer
              </div>
              <div>
                <i className="ni education_hat mr-2" />
                University of Computer Science
              </div>
              <hr className="my-4" />
              <p>
                J'aime faire du tennis et sortir avec mes potes
              </p>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col className="order-xl-1" xl="8">
        <Card className="bg-secondary shadow">
          <CardHeader className="bg-white border-0">
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">My account</h3>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Form>
              <h6 className="heading-small text-muted mb-4">
                User information
              </h6>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        Username
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue="GuiguiLeDieu"
                        id="input-username"
                        placeholder="Username"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-email"
                      >
                        Email address
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-email"
                        placeholder={user.mail_client}
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-first-name"
                      >
                        First name
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue="Guillaume"
                        id="input-first-name"
                        placeholder="First name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-last-name"
                      >
                        Last name
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue="Bozon"
                        id="input-last-name"
                        placeholder="Last name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
              <hr className="my-4" />
              {/* Address */}
              <h6 className="heading-small text-muted mb-4">
                Contact information
              </h6>
              <div className="pl-lg-4">
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-address"
                      >
                        Address
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue={user.adresse_client}
                        id="input-address"
                        placeholder="Home Address"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-city"
                      >
                        City
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue="Lyon"
                        id="input-city"
                        placeholder="City"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="4">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-country"
                      >
                        Country
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue="France"
                        id="input-country"
                        placeholder="Country"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="4">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-country"
                      >
                        Postal code
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-postal-code"
                        placeholder="Postal code"
                        type="number"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
              <hr className="my-4" />
              {/* Description */}
              <h6 className="heading-small text-muted mb-4">About me</h6>
              <div className="pl-lg-4">
                <FormGroup>
                  <label>About Me</label>
                  <Input
                    className="form-control-alternative"
                    placeholder="A few words about you ..."
                    rows="4"
                    defaultValue={user.commentaire_client}
                    type="textarea"
                  />
                </FormGroup>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
      ))}
  </Container>
  )
};

export default User