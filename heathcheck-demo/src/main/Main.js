import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import ShowHealthResponse from './ShowHealthResponse';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import Footer from '../footer/Footer';
import { useState } from 'react';

const Main = () => {


  const [link, setLink] = useState('');
  const [label, setLabel] = useState('');

  const termapi = (event) => {
    fixLabel('T1', 'API');
    setLink('https://panorama-t1-panorama.ocp-prime-c55d62f44ecad82c5f9640d22d3526e6-i000.ca-tor.containers.appdomain.cloud/health/ready');
  };
  const mcloud = (event) => {
    fixLabel('T1', 'Message Cloud');
    setLink('http://messaging-cloud-t1-panorama.ocp-prime-c55d62f44ecad82c5f9640d22d3526e6-i000.ca-tor.containers.appdomain.cloud/health/ready');
  };
  const ui = (event) => {
    fixLabel('AM1', 'UI');
    setLink('https://panorama-am1-panorama.ocp-prime-c55d62f44ecad82c5f9640d22d3526e6-i000.ca-tor.containers.appdomain.cloud/health/ready');
  };
  const local = (event) => {
    fixLabel('Local', 'Message Cloud');
    setLink('http://localhost:9000/health/live');
  };
  
  const fixLabel = (a, b) =>
  {
    setLabel(a + '[' + b + ']');
  }

     return (
      <>
     <Container className='top'>
        <Row>
          <Col md={8}>
              <Form>
                  <Form.Group  controlId="env">
                      <Form.Control plaintext readOnly className='label'  value={label} /> 
                  </Form.Group>
              </Form>
              <Footer className="general-border calculate"   termapi = {termapi} mcloud = {mcloud} ui = {ui}  local = {local}/>
              
            </Col>
            <Col md={4}>
                <ShowHealthResponse  className = "list-border" link ={link}/>
            </Col>
          </Row>    

      </Container>

      </>
    );
}

export default Main;
