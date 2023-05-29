import React, { useEffect, useState } from 'react';
import './App.css';

var fun = 0;
//class App extends React.Component {
//  state = {
//    article: {title: "Welcome", desc: "Hello, React and Ajax"},   // 현재 선택된 article 정보
//    list: []    // empty list for nav tags
//  }
function App() {
  var [article, setArticle] = useState(
    {title: "Welcome", desc: "Hello, React and Ajax"}   // 현재 선택된 article 정보
  );
  var [list, setList] = useState([]);   // empty list for nav tags

  /*
  componentDidMount() {
    console.log("componentDidMount()");
    //debugger;
    // nav 생성에 필요한 초기 json data를 ajax로 가져와서 state.list에 저장
    fetch('list.json')
      .then(result => result.json())      
      .then(function(jsonObj) {
        console.log(jsonObj);
        this.setState({list:jsonObj}); // update state.list with jsonData
      }.bind(this));
  }
  */

  useEffect(() => {     // called right after rendering this component
    console.log("useEffect()");
    //debugger;
    // nav 생성에 필요한 초기 json data를 ajax로 가져와서 state.list에 저장
    fetch('list.json')
      .then(result => result.json())      
      .then(function(obj) {
        console.log("jsonObj: " + JSON.stringify(obj) + (++fun));
        setList(obj); // update state.list with json data
      });
    console.log("list:"+ JSON.stringify(list) + (++fun));
  }, []);   // 두번째 인자가 []이므로 useEffect()는 이 컴포넌트가 생성될 때 한 번만 호출되고, 그 후 state가 변경되도 호출되지 않음


// render() {
    return (
      <div className="App">
        <h1>WEB</h1>
        <Nav list={list}   // nav 생성을 위한 taglist 전달(by props)
          onClick={function(id) {     // nav에서 특정 항목 클릭 시 실행되는 CB func
            fetch(id + '.json')         // ajax call로 선택된 항목과 관련된 json data 가져와서 state.article에 저장
              .then(result => result.json())      
              .then(function(jsonObj) {
                // this.setState({
                //  article: jsonObj
                //});
                setArticle(jsonObj);
              }/*.bind(this)*/);
          }}/*.bind(this)*/></Nav>
        <Article 
          title={article.title} 
          desc={article.desc}></Article>
      </div>
    );
  }  
//}

//class Nav extends React.Component {
//  render() {
function Nav({list, onClick}) {
    console.log("Nav.render()");
    console.log("props.list:"+ JSON.stringify(list) +(++fun));

    var taglist = [];
    //props.list.forEach(entry => {
    //  taglist.push(
    taglist = list.map((entry) => (
      <li key={entry.id}>
        <a href={entry.id}  //data-id={entry.id}
          onClick={function(e) {
            e.preventDefault();
            onClick(entry.id); //e.target.dataset.id);
          //}.bind(this)}>
          }}>{entry.title}
        </a>
      </li>         
    ));       
    //  );
    //});
    console.log(taglist);    

    return (
      <nav>
        <ul>
          {taglist}
        </ul>
      </nav>
    )
  }
//}

//class Article extends React.Component {
//  render() {
function Article({title, desc}) {
    console.log("Article.render()");

    return (
      <article>
        <h2>{title}</h2>
        {desc}
      </article>
    );
  }
//}

export default App;
