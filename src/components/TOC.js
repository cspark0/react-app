//import {Component} from 'react';

//class TOC extends Component {
function TOC({entries, curContId, onClickTitle}) {  
  /*
  shouldComponentUpdate(newProps, newState) {
    console.log("==> TOC shouldComponentUpdate");
    console.log(newProps.entries, this.props.entries);
    console.log(newProps.entires === this.props.entries);
    if (newProps.entires === this.props.entries) { // property 값(객체)가 변함없으면 
      return false;                               // render() 실행하지 않음!
    }
    return true;    // render() 실행함
  }
  */

  //render() {
    console.log('==> TOC render');
    
    /*
    var entries = this.props.entries;
    for (let i = 0; i < entries.length; i++) {
      lists.push(<li key={entries[i].id}><a href={"/content/" + entries[i].id}>{entries[i].title}</a></li>);
    }
    */
    //this.props.entries.forEach(entry => {
    //  lists.push(
    const lists = entries.map(entry => 
        <li key={entry.id}>
          <a href={"/content/" + entry.id}
            /*data-id={entry.id}*/
            onClick={//function(/*entryId,*/ e) {
              e => {
                console.log(e);
                e.preventDefault();
                /*this.props.*/onClickTitle(entry.id);
              }/*.bind(this, entry.id)*/
            }>
            { (entry.id === curContId) ? <b>{entry.title}</b> : entry.title }
          </a>
        </li>
      //);
    );     
    
    return (
      <nav>
        <ul>       
          {lists}
          {/* this.props.data */}
        </ul>
      </nav>
    );
  //}
}

export default TOC;
  