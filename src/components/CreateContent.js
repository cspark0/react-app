import { Component } from 'react';

//class CreateContent extends Component {
function CreateContent({onNewContent}) {
  //render() {
    console.log('CreateContent render');
    
    const submit = e => {
      e.preventDefault();
      onNewContent(e.target.title.value, e.target.desc.value);
      e.target.title.value = "";
      e.target.desc.value = "";
      alert('Created!');
    };

    return (
      <article>
        <h2>Create</h2>
        <form action="/create_process" method="POST"
          onSubmit={submit}>
          <p><input type="text" name="title" 
                    placeholder="input title..."/></p>              
          <p><textarea name="desc" 
                    placeholder="input description..."/></p>
          <p><input type="submit"/></p>
        </form>        
      </article>    
    );
  //}
}
  
export default CreateContent;