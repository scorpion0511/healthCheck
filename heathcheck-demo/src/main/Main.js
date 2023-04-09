import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import ShowHealthResponse from './ShowHealthResponse';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import Footer from '../footer/Footer';
import { useState } from 'react';
import Header from '../header/Header';
import 'react-datepicker/dist/react-datepicker.css';

const Main = (props) => {


  const [env, setEnv] = useState('');
  const [checks, setChecks] = useState('');
  const [link, setLink] = useState('');

  const termapi = (event) => {
    setEnv('T1');
    setChecks('DB , Application');
    setLink('https://panorama-t1-panorama.ocp-prime-c55d62f44ecad82c5f9640d22d3526e6-i000.ca-tor.containers.appdomain.cloud/health/ready');
  };
  const mcloud = (event) => {
    setEnv('T1');
    setChecks('DB , Application [Fake], AMQ');
    setLink('http://messaging-cloud-t1-panorama.ocp-prime-c55d62f44ecad82c5f9640d22d3526e6-i000.ca-tor.containers.appdomain.cloud/health/ready');
  };
  const ui = (event) => {
    setEnv('T1');
    setChecks('DB , Application [Fake]');
    setLink('https://panorama-t1-panorama.ocp-prime-c55d62f44ecad82c5f9640d22d3526e6-i000.ca-tor.containers.appdomain.cloud/health/ready');
  };
  const local = (event) => {
    setEnv('Local');
    setChecks('DB , AMQ [Down], Application [Fake]');
    setLink('http://localhost:9000/health/live');
  };
     return (
      <>
     <Container className= {props.className}>
        <Header className='general-border' />
        <Row>
          <Col>
              <div style={{ height: '210px', overflowY: 'scroll' }}>
                    <Form>
                          <Form.Group  controlId="env">
                              <Form.Label className='label'>Environment</Form.Label> 
                              <Form.Control plaintext readOnly value={env} /> 
                          </Form.Group>

                          <Form.Group  controlId="checks">
                              <Form.Label className='label'>Checks</Form.Label> 
                              <Form.Control  plaintext readOnly value={checks} /> 
                          </Form.Group>
                    </Form>
              </div>
              <Footer className="general-border calculate"   termapi = {termapi} mcloud = {mcloud} ui = {ui}  local = {local}/>
              
            </Col>
            <Col>
                <ShowHealthResponse  className = "list-border" link ={link}/>
            </Col>
          </Row>    

      </Container>

      </>
    );
}

export default Main;
