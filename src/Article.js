import React, { useState } from 'react';
import './App.css';

export default function Article({title, desc}) {
  console.log("Article.render()");

  return (
    <article>
      <h2>{title}</h2>
      {desc}
    </article>
  );
}

