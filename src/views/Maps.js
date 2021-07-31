import React from "react";

// react-bootstrap components
import { Badge, Button, Navbar, Nav, Container } from "react-bootstrap";
import {
  Card,
  Table,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
function Maps() {
  // const mapRef = React.useRef(null);
  // React.useEffect(() => {
  //   let google = window.google;
  //   let map = mapRef.current;
  //   let lat = "40.748817";
  //   let lng = "-73.985428";
  //   const myLatlng = new google.maps.LatLng(lat, lng);
  //   const mapOptions = {
  //     zoom: 13,
  //     center: myLatlng,
  //     scrollwheel: false,
  //     zoomControl: true,
  //   };

  //   map = new google.maps.Map(map, mapOptions);

  //   const marker = new google.maps.Marker({
  //     position: myLatlng,
  //     map: map,
  //     animation: google.maps.Animation.DROP,
  //     title: "Light Bootstrap Dashboard PRO React!",
  //   });

  //   const contentString =
  //     '<div class="info-window-content"><h2>Light Bootstrap Dashboard PRO React</h2>' +
  //     "<p>A premium Admin for React-Bootstrap, Bootstrap, React, and React Hooks.</p></div>";

  //   const infowindow = new google.maps.InfoWindow({
  //     content: contentString,
  //   });

  //   google.maps.event.addListener(marker, "click", function () {
  //     infowindow.open(map, marker);
  //   });
  // }, []);
  return (
    <>
      <div className="map-container">
        <Card>
          <Card.Header>
            <Card.Title as="h4">Proyectar:</Card.Title>
          </Card.Header>
          <Card.Body>
            <div id="map">
              <select name="OS">
                <option selected value="0">
                  {" "}
                  ...{" "}
                </option>
                <option value="1">Próximo Ciclo</option>
                <option value="2">Por Carrera</option>
                <option value="3">Por Curso</option>
                <option value="10">Extrapolar</option>
                <option value="11">Grado de Certeza</option>
              </select>
            </div>
          </Card.Body>
          <Card.Footer>
            <hr></hr>
            <div className="stats">
              <p className="copyright text-center">
                {" "}
                Última actualización: Julio, {new Date().getFullYear()}{" "}
              </p>
            </div>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title as="h4">Generar Reporte:</Card.Title>
          </Card.Header>
          <Card.Body>
            <div id="map">
              <select name="OS">
                <option selected value="0">
                  {" "}
                  ...{" "}
                </option>
                <option value="1">Próximo Ciclo</option>
                <option value="2">Por Carrera</option>
                <option value="3">Por Curso</option>
                <option value="10">Extrapolar</option>
                <option value="11">Grado de Certeza</option>
              </select>
            </div>
            <br></br>
            <p>
              Exportar como :  
              <select name="OS">
                <option selected value="0">
                  {" "}
                  ...{" "}
                </option>
                <option value="1">PDF</option>
                <option value="2">CSV</option>
              </select>
            </p>
          </Card.Body>
          
        </Card>
      </div>
    </>
  );
}

export default Maps;
