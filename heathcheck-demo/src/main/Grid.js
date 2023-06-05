import React from 'react';
import Run from './Run';
import $, { data } from 'jquery';
import { useState } from 'react';
import {pods, podsObjs, link, separation, protocol} from './data';

const Grid = (props) => {
  // An array representing a 4x4 grid
  const cells = Array.from(Array(4), () => Array(5).fill());

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
        if (props.env.toUpperCase() === 'AM1' && podId === 'Panorama-Cloud')
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

    <Run env = {props.env}  updateStatus = {updateStatus}/>

    </>
  );
};

export default Grid;
