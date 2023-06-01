import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import ShowHealthResponse from './ShowHealthResponse';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import { useState } from 'react';
import Grid from './Grid';

const Main = () => {



  const envs = ['', 'T1', 'T2', 'AM1', 'LOCAL'];

  const [link, setLink] = useState('');
  const [env, setEnv] = useState('');

  const loadStatus = (event) => {
    setEnv(event.target.value);
  }
     return (
       <>
         <Container className="top">
           <Row>
             <Col md={8}>
              <div className='control'>
               <select className="list" onChange={loadStatus}>
                 {envs.map((item, index) => (
                   <option key={index} value={item}>
                     {item}
                   </option>
                 ))}
               </select>
               </div>
               <Grid env = {env} setLink={setLink}/>
             </Col>
             <Col md={4}>
               <ShowHealthResponse className="list-border" link={link} env={env} />
             </Col>
           </Row>
         </Container>
       </>
     );
}

export default Main;
