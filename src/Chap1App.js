import './App.css';
import { Component } from 'react';
import Subject from './components/Subject'
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Control from './components/Control';

class App extends Component {
  
  state = {
    mode: 'no_content',
    selected_cont_id: 0,
    subject: {title: "Web1", sub: "WWW1"},
    contents: [
      {id: 1, title:'HTML', desc:'HTML is for information'},
      {id: 2, title:'CSS', desc:'CSS is for information'},
      {id: 3, title:'Javascript', desc:'Javascript is for information'},
    ],
    data: [
      <li key="11"><a href="/content/1">XML</a></li>,
      <li key="12"><a href="/content/2">AJAX</a></li>,
      <li key="13"><a href="/content/3">XSLT</a></li>
    ]
  }
  max_cont_id = 3;

  /*
  constructor(props) {
    super(props);    
    this.state = {
      mode: 'no_content',
      selected_cont_id: 1,
      subject: {title: "Web1", sub: "WWW1"},
      contents: [
        {id: 1, title:'HTML', desc:'HTML is for information'},
        {id: 2, title:'CSS', desc:'CSS is for information'},
        {id: 3, title:'Javascript', desc:'Javascript is for information'},
      ],
      data: [
        <li key="11"><a href="/content/1">XML</a></li>,
        <li key="12"><a href="/content/2">AJAX</a></li>,
        <li key="13"><a href="/content/3">XSLT</a></li>
      ]
    }
    this.max_cont_id = 3;    
  }
  */

  getSelectedContent() {
    for (let i = 0; i < this.state.contents.length; i++) {
      if (this.state.contents[i].id === this.state.selected_cont_id) {
        return this.state.contents[i];        
      }
    }    
    return null;
  }

  getArticle() {
    var article = null;    

    if (this.state.mode === 'no_content') {      
      article = null;
    }
    else if (this.state.mode === 'read') {      
      var content = this.getSelectedContent();
      article = <ReadContent title={content.title} desc={content.desc}/>
    }
    else if (this.state.mode === 'create') {      
      article = <CreateContent onSubmit={
        function(_title, _desc) {
          console.log(_title, _desc);
          var _id = ++this.max_cont_id;
          /*
          this.state.contents.push(
            {id: this.max_cont_id, title: _title, desc: _desc},
          );
          */      
          /*
          var newContents = this.state.contents.concat(       // copy & concat
            {id: this.max_cont_id, title: _title, desc: _desc},
          );
          */
          var newContents = Array.from(this.state.contents);  // copy
          newContents.push(
            {id: _id, title: _title, desc: _desc},
          );          
          this.setState({  // update contents and mode (in state)  
            // {contents: this.state.contents}
            contents: newContents,
            mode: 'read',
            selected_cont_id: _id
          });           
        }.bind(this)} />
    }
    else if (this.state.mode === 'update') {      
      var selected_cont = this.getSelectedContent();       
      if (selected_cont !== null) {
        article = <UpdateContent data={selected_cont} onSubmit={
          function(_title, _desc) {  // new content data 
            console.log(_title, _desc);         
            
            var newContents = Array.from(this.state.contents);  // copy contents
            for (let i = 0; i < newContents.length; i++) {
              if (newContents[i].id === this.state.selected_cont_id) {
                // update selected content with new data
                newContents[i] = {title:_title, desc:_desc};
                break;
              }
            }
            this.setState({   // update contents and mode (in state)  
              contents: newContents,
              mode: 'read'
            });                     
          }.bind(this)
        } />
      }
    }
    return article;
  }

  render() {
    console.log('App render');   
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub} 
          onClickSubjectTitle={function() {
            if (this.state.mode !== 'no_content')                                  
              this.setState({mode:'no_content'});
          }.bind(this)}
        />        
        <TOC 
          entries={this.state.contents} 
          data={this.state.data} 
          onClickEntryTitle={function(id) {
            this.setState({
              mode: 'read',
              selected_cont_id: id
            });
          }.bind(this)}
        />
        <Control 
          numOfEntries={this.state.contents.length} 
          onChangeMode={
            function(_mode) {
              if (_mode !== 'delete') {    // _mode == 'create'/'update'/'read'
                this.setState({mode: _mode});
              }
              else {  // _mode === 'delete'
                if (this.state.selected_cont_id === 0) {
                  alert('no content selected to delete!');
                } 
                else if(window.confirm('really?') === true) {
                  var newContents = Array.from(this.state.contents);  // copy contents
                  for (let i = 0; i < newContents.length; i++) {
                    if (newContents[i].id === this.state.selected_cont_id) {
                      newContents.splice(i, 1);   // delete entry
                      break;
                    }
                  }
                  alert('deleted!');
                  this.setState({   // update contents and mode (in state)  
                    contents: newContents,
                    mode: 'no_content',
                    selected_cont_id: 0
                  }); 
                }
              }           
            }.bind(this)
          }
        />         
        {this.getArticle()}
      </div>
    );
  }
}

export default App;
