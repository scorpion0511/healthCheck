import {useEffect} from 'react';
import {pods, podsObjs , link, separation, protocol, buildUrl} from './common/common';

const Run = (props) =>
{

useEffect(() => {
    clear();
    if (props.env.trim().length != 0)
    {
      
        pods.map(pod => {
            load(pod); 
        });

    }
    }, [props.env]);

const clear = () => {
    pods.filter(e=> e.trim().length > 0).map(pod => {
        props.updateStatus(pod, 'DEFAULT');
    });

}
const load = (pod) => {
    if (pod.trim().length > 0) {
      const url = buildUrl (pod, props.env);
      fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json"
        },
      })
        .then((response) => response.json())
        .then((result) => {
          const { checks } = result;
          props.updateStatus(pod, assessStatus(checks[0]));
        })
        .catch((error) => {
            props.updateStatus(pod, 'ERROR');
        });
    }
  };
const assessStatus = (object) => {
  const obj = object.data;
  for (let key in obj) 
  {
    if (obj.hasOwnProperty(key) && obj[key] !== "OK") {
      return "PARTIAL";
    }
  }
  return object.status;
}
return (<div></div>);
}
export default Run;