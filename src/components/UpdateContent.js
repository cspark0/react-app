//import { Component } from 'react';
import {useState } from 'react';

/*
class UpdateContent extends Component {
  state = {
    id: this.props.content.id,
    title: this.props.content.title,
    desc: this.props.content.desc
  }
  
  constructor(props) {
    super(props);    
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }

  inputFormHandler(e) {      
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    console.log('UpdateContent render');

    return (
      <content>
        <h2>Update</h2>
        <form action="/update_process" method="POST"
          onSubmit={function(e) {
                    e.preventDefault();
                    this.props.onSubmit(
                      this.state.title, 
                      this.state.desc
                    );
                  }.bind(this)}>
          <input type="hidden" name="id" value={this.state.id} />
          <p><input type="text" name="title"  
                    placeholder="input title..."
                    value={this.state.title}
                    onChange={this.inputFormHandler} /></p>
          <p><textarea name="desc" 
                    placeholder="input description..."
                    value={this.state.desc}
                    onChange={this.inputFormHandler} /></p>
          <p><input type="submit"/></p>
        </form>        
      </content>    
    );
  }
}
*/

function UpdateContent({content, onNewContent}) {
  const [title, setTitle] = useState(content.title); 
  const [desc, setDesc] = useState(content.desc);
    
  console.log('UpdateContent render');

  return (
    <article>
      <h2>Update</h2>
      <form action="/update_process" method="POST"
        onSubmit={e => {
                    e.preventDefault();
                    onNewContent(title, desc);
                    alert('Updated!');
                  }}>
        <input type="hidden" name="id" value={content.id} />
        <p><input type="text" name="title"  
                  placeholder="input title..."
                  value={title}
                  onChange={e => setTitle(e.target.value)}/></p>
        <p><textarea name="desc" 
                  placeholder="input description..."
                  value={desc}
                  onChange={e => setDesc(e.target.value)}/></p>
        <p><input type="submit"/></p>
      </form>        
    </article>    
  );

}

export default UpdateContent;