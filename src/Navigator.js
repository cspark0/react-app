//import React, { useState } from 'react';
import './App.css';

export default function Navigator({tagList, onClickTag}) {
  console.log("Navigator.render()");
  console.log("props.tagList:"+ JSON.stringify(tagList));

  let tag_list = tagList.map((entry) => (
    <div></div><li key={entry.id}>
      <a href={entry.id}  
        onClick={(e) => {
          e.preventDefault();
          onClickTag(entry.id); 
        }}>{entry.title}
      </a>
    </li>         
  ));  
  console.log(tag_list);    

  return (
    <nav>
      <ul>
        {tag_list}
      </ul>
    </nav>
  )
}
