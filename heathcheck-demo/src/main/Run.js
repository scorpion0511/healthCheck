
import {useEffect} from 'react';

const Run = (props) =>
{
    const link = 'panorama.ocp-prime-c55d62f44ecad82c5f9640d22d3526e6-i000.ca-tor.containers.appdomain.cloud/health/live';
    const separation = '-';
    const protocol = 'http://';

    const buildUrl = (podId) => {
        let httpProtocol = protocol;
        if (props.env.toUpperCase() === 'AM1' && podId === 'UI')
       {
        httpProtocol = 'https://';
       } 
       return httpProtocol + props.podsObjs[podId] + separation + props.env + separation + link;
}
useEffect(() => {
    clear();
    if (props.env.trim().length != 0)
    {
      
        props.pods.map(pod => {
            load(pod); 
        });

    }
    }, [props.env]);

const clear = () => {
    props.pods.filter(e=> e.trim().length > 0).map(pod => {
        props.updateStatus(pod, 'DEFAULT');
    });

}
const load = (pod) => {
    if (pod.trim().length > 0) {
      const url = buildUrl (pod);
      fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json"
        },
      })
        .then((response) => response.json())
        .then((result) => {
          const { checks } = result;
          props.updateStatus(pod, checks[0].status);
        })
        .catch((error) => {
            props.updateStatus(pod, 'FAILED');
        });
    }
  };

return (<div></div>);
}
export default Run;