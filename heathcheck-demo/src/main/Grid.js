import React from 'react';
import Run from './Run';
import $ from 'jquery';
import { useState } from 'react';

const Grid = (props) => {
  // An array representing a 4x4 grid
  const cells = Array.from(Array(4), () => Array(5).fill());
  const pods = ['UI', 'MESSAGE-CLOUD', 'LAB-Web-SERVICE','NVENTORY-WEB-SERVICE', 'Reporting-Business-Intelligence', 
  'TERMINOLOGY-API', 'INVENTORY-API', 'CONSENT-API', 'ORGANIZATION-API', 'SECURITY-API' , 'PROVIDER-API',
  'IMMUNIZATION-API', 'SHARED-SERVICE-API', 'INVESTIGATION-API', 'CLIENT-API','BATCH-SCHEDULER-CASE',
  'BATCH-SCHEDULER-INVENTORY','BATCH-SCHEDULER-IMMUNIZATION',
    '', ''];

  const podsObjs = {'UI':'panorama-cloud', 'MESSAGE-CLOUD':'messaging-cloud', 'LAB-Web-SERVICE':'lab-web-services-web','NVENTORY-WEB-SERVICE':'inventory-web-services-web', 'BATCH-SCHEDULER-CASE':'batch-scheduler-case',
  'BATCH-SCHEDULER-INVENTORY':'batch-scheduler-inventory','BATCH-SCHEDULER-IMMUNIZATION':'batch-scheduler-immunization', 'INVESTIGATION-API':'sdsmapi-investigation-web', 'CLIENT-API':'sdsmapi-client-web',
  'TERMINOLOGY-API':'sdsmapi-terminology-web', 'INVENTORY-API':'sdsmapi-inventory-web', 'CONSENT-API':'sdsmapi-consent-web', 'ORGANIZATION-API':'sdsmapi-organization-web',
  'SECURITY-API':'sdsmapi-security-web' , 'PROVIDER-API':'sdsmapi-provider-web',
  'IMMUNIZATION-API':'sdsmapi-immunization-web' , 'SHARED-SERVICE-API':'sdsmapi-sharedservice-web',
   'Reporting-Business-Intelligence':'reporting-business-intelligence'};

   const link = 'panorama.ocp-prime-c55d62f44ecad82c5f9640d22d3526e6-i000.ca-tor.containers.appdomain.cloud/health/live';
   const separation = '-';
   const protocol = 'http://';
   const updateStatus = (id, status) =>
   {
     if (status.toUpperCase() === 'UP') 
     {
        $('#'+id).css('background-color', 'greenyellow');
     }
     else if (status.toUpperCase() === 'PARTIAL') 
     {
        $('#'+id).css('background-color', 'yellow');
     }
     else if (status.toUpperCase() === 'ERROR') 
     {
        $('#'+id).css('background-color', 'red');
     }
     else
     {
        $('#'+id).css('background-color', 'lightgray');
     }
   }
   const buildUrl = (podId) => {
    if (podId.length > 0)
    {
        let httpProtocol = protocol;
        if (props.env.toUpperCase() === 'AM1' && podId === 'UI')
       {
        httpProtocol = 'https://';
       } 
        return httpProtocol + podsObjs[podId] + separation + props.env + separation + link;
    }
    return podId;
 }
   const displayDetails = (event) => {
   if (event.target.id.trim().length > 0 && props.env.trim().length > 0)
   {
         const backgroundColor = $('#'+event.target.id).css('background-color');
        if (backgroundColor === 'rgb(255, 0, 0)' || backgroundColor === 'red')
        {
          alert('POD is Not Accessible');
          return;
        }
        props.setLink(buildUrl(event.target.id));
        props.setPod(event.target.id);
   }

   }




  return (
    <>
    <div className="grid">
      {cells.map((row, rowIndex) => (
        <div key={rowIndex} >
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className={pods[(rowIndex + cellIndex) + (4* rowIndex)] === '' ? 'hideMe' : 'cell'} id = {pods[(rowIndex + cellIndex) + (4* rowIndex)]} onClick={displayDetails}>
              {pods[(rowIndex + cellIndex) + (4* rowIndex)]}
            </div>
          ))}
        </div>
      ))}
    </div>

    <Run pods={pods} env = {props.env}  podsObjs= {podsObjs} updateStatus = {updateStatus}/>

    </>
  );
};

export default Grid;
