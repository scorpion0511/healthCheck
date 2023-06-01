import React from 'react';
import Run from './Run';
import $ from 'jquery';
import { useState } from 'react';

const Grid = (props) => {
  // An array representing a 4x4 grid
  const cells = Array.from(Array(4), () => Array(5).fill());
  const pods = ['UI', 'MESSAGE-CLOUD', 'LAB-Web-SERVICE','NVENTORY-WEB-SERVICE', '', 'BATCH-SCHEDULER-CASE',
  'BATCH-SCHEDULER-INVENTORY','BATCH-SCHEDULER-IMMUNIZATION', '', 'Reporting-Business-Intelligence',
   'INVESTIGATION-API', 'CLIENT-API',
  'TERMINOLOGY-API', 'INVENTORY-API', 'CONSENT-API', 'ORGANIZATION-API', 'SECURITY-API' , 'PROVIDER-API',
  'IMMUNIZATION-API', 'SHARED-SERVICE-API'];

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
     else if (status.toUpperCase() === 'DEFAULT') 
     {
        $('#'+id).css('background-color', 'lightgray');
     }
     else
     {
        $('#'+id).css('background-color', 'red');
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
        props.setLink(buildUrl(event.target.id));
   }

   }




  return (
    <>
    <div className="grid">
      {cells.map((row, rowIndex) => (
        <div key={rowIndex} >
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className="cell" id = {pods[(rowIndex + cellIndex) + (4* rowIndex)]} onClick={displayDetails}>
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
