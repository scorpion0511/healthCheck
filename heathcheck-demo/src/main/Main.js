import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import ShowHealthResponse from './ShowHealthResponse';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import { useState } from 'react';
import Grid from './Grid';
import {envs} from './common/common';

const Main = () => {




  const [link, setLink] = useState('');
  const [env, setEnv] = useState('');
  const [pod, setPod] = useState('');

  const loadStatus = (event) => {
    setEnv(event.target.value);
    setPod('');
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
               <Grid env = {env} setLink={setLink} setPod={setPod}/>
             </Col>
             <Col md={4}>
               <ShowHealthResponse className="list-border" pod={pod} link={link} env={env} />
             </Col>
           </Row>
         </Container>
       </>
     );
}

export default Main;
