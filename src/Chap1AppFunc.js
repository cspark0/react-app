import './App.css';
import React, { useEffect, useState } from 'react';
//import { Component } from 'react';
// import Subject from './components/Subject'
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Control from './components/Control';
import Greeting from './GreetingApp';

//class App extends Component {
function App() {
  /*
  state = {
    mode: 'no_content',
    currContId: 0,
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
  */
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

  const [mode, setMode] = useState('no_article'); 
  
  /*
  const [subject] = useState(
    {title: "Web1", sub: "WWW1"}  // 현재 선택된 article 정보
  );
  */
  const [contents, setContents] = useState(
    [
      {id: 1, title:'HTML', desc:'HTML is for information'},
      {id: 2, title:'CSS', desc:'CSS is for information'},
      {id: 3, title:'Javascript', desc:'Javascript is for information'}
    ]
  ); 

  const [curContId, setCurContId] = useState(0); 
  const [maxContId, setMaxContId] = useState(contents.length); 

  useEffect(() => { 
    console.log("useEffect()");
    fetch('contents.json')       // Ajax call로 선택된 tab에 관한 JSON data를 가져와서 article state에 저장
      .then(response => response.json())      
      .then(contents => {
        setContents(contents);
        setMaxContId(contents.length);
      })
      .catch(error => console.error(error));
  }, []);

//  var [data, setData] = useState();   
/*
  useEffect(() => {     // called right after rendering this component
    console.log("useEffect()");
    //debugger;
    // nav 생성에 필요한 초기 json data를 ajax로 가져와서 state.list에 저장
    setContents(
      [
        {id: 1, title:'HTML', desc:'HTML is for information'},
        {id: 2, title:'CSS', desc:'CSS is for information'},
        {id: 3, title:'Javascript', desc:'Javascript is for information'}
      ]
    ); 
  }, []);   // 두번째 인자가 []이므로 useEffect()는 이 컴포넌트가 생성될 때 한 번만 호출되고, 그 후 state가 변경되도 호출되지 않음
*/
  /*
  getSelectedContent() {
    for (let i = 0; i < contents.length; i++) {
      if (contents[i].id === curContId) {
        return contents[i];        
      }
    }    
    return null;
  }
  */

  const getContent = () => {
    let content = null;    
    switch (mode) {
      case 'read':  
        /*
        let content = null;  // getSelectedContent();
        for (let i = 0; i < contents.length; i++) {
          if (contents[i].id === curContId) {
            content = contents[i];        
            break;
          }
        }
        */
        var curCont = contents.find(content => (content.id === curContId));
        content = <ReadContent title={curCont.title} desc={curCont.desc}/>
        break;

      case 'create':      
        content = <CreateContent 
          onNewContent={(title, desc) => {
            let newId = maxContId + 1;
            console.log(title, desc);                      
            const newContents = [
              ...contents,
              {id: newId, title, desc}
            ]
            /* const newContents = contents.concat(   // copy & push
              {newId, title, desc},
            ); */         
            /*
            const newContents = Array.from(contents);  // copy
            newContents.push({id: ++max_cont_id, title, desc});  // push
            */
            /*this.setState({  // update contents and mode (in state)  
              // {contents: this.state.contents}
              contents: newContents,
              mode: 'read',
              curContId: _id
            });*/
            setContents(newContents);
            setCurContId(newId);
            setMaxContId(newId);
            setMode('read');           
          }/*.bind(this)*/ } />
        break;

      case 'update':
        //var content = this.getSelectedContent();       
        /* 
        let content = null;
        for (let i = 0; i < contents.length; i++) {
          if (contents[i].id === curContId) {
            content = contents[i];        
            break;
          }
        } 
        */
        curCont = contents.find(content => (content.id === curContId));        
        content = <UpdateContent content={curCont} 
          onNewContent={(title, desc) => {  // new content data 
            console.log(title, desc);                     
            /*
            var newContents = Array.from(contents);  // copy contents
            for (let i = 0; i < newContents.length; i++) {
              if (newContents[i].id === curContId) {
                // update selected content with new data
                newContents[i] = {id: curContId, title, desc};
                break;
              }
            }
            */
            const newContents = contents.map(content =>
              (content.id === curContId) ? {...content, title, desc} : content 
            );    // id가 curContId와 같으면 title과 desc 변수 값을 셋팅한 content를 생성/저장하고
                  // 그렇지 않으면 기존 content를 copy해서 저장: 새로운 배열 생성
            /*this.setState({   // update contents and mode (in state)  
              contents: newContents,
              mode: 'read'
            });*/
            setContents(newContents);
            setMode('read');                     
          }} />        
    }
    return content;
  };

// render() {
  console.log('App render');   
  return (
    <div className="App">
      <Greeting name="Jain" />           
      <TOC entries={contents} curContId={curContId}
        onClickTitle={selectedId => {
          setMode('read');
          setCurContId(selectedId);
        }}
      />
      <Control 
        hasContent={contents.length > 0 ? true : false} 
        onChangeMode={mode => {
          switch (mode) {
            case 'create':
              setMode(mode);
              break;              
            case 'update':
              if (curContId === 0) 
                alert('no content selected to update!');      
              else setMode(mode);
              break;                                
            case 'delete':
              if (curContId === 0) 
                alert('no content selected to delete!'); 
              else if(window.confirm('really?') === true) {
                /*
                var newContents = Array.from(this.state.contents);  // copy contents
                for (let i = 0; i < newContents.length; i++) {
                  if (newContents[i].id === this.state.curContId) {
                    newContents.splice(i, 1);   // delete entry
                    break;
                  }
                }
                */
                const newContents = contents.filter(
                  content => (content.id !== curContId));   
                  // id가 curContId가 아닌 content들만 골라내서 새로운 배열 생성
                /*
                this.setState({   // update contents and mode (in state)  
                  contents: newContents,
                  mode: 'no_content',
                  curContId: 0
                }); */
                setContents(newContents);
                setCurContId(0);
                setMode('no_article');
                alert('Deleted!');                
              }
            }
          }           
        }//.bind(this)
      />      
      <div><br/>{getContent()}</div>         
    </div>
  );
//}
}

export default App;
