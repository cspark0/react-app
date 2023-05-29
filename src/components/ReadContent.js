//import { Component } from 'react';

//class ReadContent extends Component {
function ReadContent({title, desc}) {
  //render() {
    console.log('Content render');
    return (
      <article>
        <h2>{title}</h2>
        {desc}
      </article>    
    );
  //}
}
  
export default ReadContent;