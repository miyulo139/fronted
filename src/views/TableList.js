import React from "react";

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
} from "react-bootstrap";

function TableList() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Tabla de Usuarios</Card.Title>
                <p className="card-category">
                  Usuarios que poseen acceso a esta plataforma
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Nombre</th>
                      <th className="border-0">Correo</th>
                      <th className="border-0">Rol</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>drice@utec.edu.pe</td>
                      <td>Admin</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>mhooper@utec.edu.pe</td>
                      <td>SE</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>srodriguez@utec.edu.pe</td>
                      <td>SE</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>pchaney@utec.edu.pe</td>
                      <td>Docente</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                      <td>dgreene@utec.edu.pe</td>
                      <td>Docente</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>mporter@utec.edu.pe</td>
                      <td>Admin</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
