import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';

const Footer = (props) => {

    return (
      <Container className = {props.className} >
            <Button className="text-uppercase  btn-outline-success gap" variant='none' onClick={props.termapi}>
              Terminology
            </Button>
            <Button className="text-uppercase  btn-outline-dark gap" variant='none'  onClick={props.mcloud}>
              Message Cloud
            </Button>
            <Button className="text-uppercase  btn-outline-primary gap" variant='none'  onClick={props.ui}>
              UI
            </Button>
            <Button className="text-uppercase  btn-outline-danger gap" variant='none'  onClick={props.local}>
              Unhealthy
            </Button>
            
      </Container>
    );
}

export default Footer;
