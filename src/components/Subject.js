import { Component } from 'react';

//class Subject extends Component {
function Subject({title, sub /*, onClickSubjectTitle*/}) { // Subject(props) {
  /*
  shouldComponentUpdate() {
    console.log("==> Subject shouldComponentUpdate");
    return false;
  }
  */

  //render() {
    console.log('Subject render');
    return (
      <header>
        <h1><a href="/" onClick={e => {
                          console.log(e);
                          e.preventDefault();
                          /*this.props.*/
                          onClickSubjectTitle();                                      
                        }/*.bind(this)*/}>
              {/*this.props.*/title}
            </a></h1>
        {/*this.props.*/sub}
      </header>   
    );
  //}
}

export default Subject;