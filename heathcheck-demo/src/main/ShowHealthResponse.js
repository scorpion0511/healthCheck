import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';

const ShowHealthResponse = (props) => {

  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      document.body.style.cursor = 'wait';
    } else {
      document.body.style.cursor = 'default';
    }
  }, [loading]);

      //keep tacks of x
      //don't run unless props changed
     useEffect(() => {
      if (props.link != undefined && props.link.trim().length != 0)
      {
          setLoading(true);
          load(props.link);

      }
      }, [props.link]);
      
      useEffect(() => {
       
            setResult ([]);

        }, [props.env]);

  const load = (link) => {
    if (link.trim().length > 0) {
      fetch(link, {
        method: "GET",
        headers: {
          accept: "application/json"
        },
      })
        .then((response) => response.json())
        .then((result) => {
          setLoading(false);
          const { checks } = result;
          setResult(checks[0]);
        })
        .catch((error) => {
          setLoading(false);
          alert(error);
        });
    }
  };

  return (
  <Container className={props.className}>
     <div style={{ height: '140px', overflowY: 'scroll' }}>
    {
      //very interesting
      result.data && Object.keys(result.data).length > 0 &&
      <div>
        <div><span className='label-black'>Name:</span> {result.name}</div>
        <div><span className='label-black'>Status:</span> {result.status}</div>
        <div style={{ height: '260px', overflowY: 'scroll' }}>
        {
          Object.keys(result.data).map((key) => (
            <div key={key}>
              <li><span className="label-black">{key}:</span> {result.data[key]}</li>
            </div>))
        }
        </div>
      </div>
}
</div>
    </Container>
  );
};
export default ShowHealthResponse;