import React, { useState } from 'react';
import Navigator from './Navigator';  import Article from './Article';
import './App.css';

function ArticleApp() {
  const [list, setList] = useState([        // article 목록 (tag list)
    {"id":1, "title":"HTML"},
    {"id":2, "title":"JavaScript"},
    {"id":3, "title":"React"}
  ]);
  
  const [article, setArticle] = useState(   // 현재 선택된 article 정보
    {title: "Welcome", desc: "Hello! This is an example of React and Ajax."}   
  );

  return (
    <div></div>
    <div className="App">
      <h1>React Example</h1>
      <Navigator tagList={list}     // navigator 생성을 위한 taglist 전달(props)
        onClickTag={(id) => {       // navigator에서 특정 tag 클릭 시 실행되는 callback func
          fetch(id + '.json')       // Ajax call로 선택된 tab에 관한 JSON data를 가져와서 article state에 저장
            .then(response => response.json())      
            .then(article => setArticle(article))
            .catch(error => console.error(error));
        }} />
      <Article 
        title={article.title} 
        desc={article.desc} />
    </div>
  );
}  

export default ArticleApp;
