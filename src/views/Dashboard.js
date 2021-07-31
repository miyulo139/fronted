import React from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Grid } from "@material-ui/core";
import Graphics from "../components/Graphics/Graphics.js";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <center>
                <Card.Header>
                  <Card.Title as="h4">
                    Cantidad de Alumnos Matriculados
                  </Card.Title>
                  <p className="card-category">Ciclo 2021-1 al 2024-0</p>
                </Card.Header>
                <Card.Body>
                  <div className="ct-chart" id="chartHours">
                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                      <Graphics />
                    </Grid>
                  </div>
                  <div className="stats">
                    <i className="fas fa-history"></i>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br> Actualizado hace 9 minutos
                  </div>
                </Card.Body>
              </center>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">QI0027 - Química General</Card.Title>
                <p className="card-category">
                  Alumnos Matriculados del 2021-1 al 2023-2
                </p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "2021-1",
                        "2021-2",
                        "2022-0",
                        "2022-1",
                        "2022-2",
                        "2023-0",
                        "2023-1",
                        "2023-2",
                      ],
                      series: [
                        [207, 210, 217, 212, 200, 211, 220, 218],
                        // [67, 152, 143, 240, 287, 335, 435, 437],
                        // [23, 113, 67, 108, 190, 239, 307, 308],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 300,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <center>
                  <div className="stats">
                    <i className="fas fa-history"></i>
                    Actualizado hace 9 minutos
                  </div>
                </center>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Carreras en 2021-1 & 2021-2</Card.Title>
                <p className="card-category">
                  Alumnos matriculados por carrera del 2021-1 y 2021-2.
                </p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartActivity">
                  <ChartistGraph
                    data={{
                      labels: [
                        "Amb",
                        "Elec",
                        "Meca",
                        "Mect",
                        "DS",
                        "Ind",
                        "Bio",
                        "Ener",
                        "Civ",
                        "CS",
                        "Adm",
                      ],
                      series: [
                        [39, 43, 20, 80, 53, 53, 26, 34, 68, 98, 56],
                        [42, 42, 24, 80, 57, 50, 30, 64, 68, 119, 36],
                      ],
                    }}
                    type="Bar"
                    options={{
                      seriesBarDistance: 5,
                      axisX: {
                        showGrid: false,
                      },
                      height: "245px",
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          seriesBarDistance: 5,
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <center>
                  <div className="stats">
                    <i className="fas fa-history"></i>
                    Actualizado hace 9 minutos
                  </div>
                </center>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
