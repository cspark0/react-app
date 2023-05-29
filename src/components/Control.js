//import { Component } from 'react';

//class Control extends Component {
function Control({hasContent, onChangeMode}) {
  /*
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  */
  
//  onClickHandler(e) {
  const onClickHandler = e => {
    e.preventDefault();
    // invoke a callback function assigned to the onChangeMode property
    /*this.props.*/onChangeMode(e.target.dataset.mode);  // e.target == <a>/<input> element, dataset은 data- 로 시작하는 속성들
  };
   
  //render() {
    console.log('Control render');
    var update_link = null;
    var delete_button = null;

    if (hasContent === true) { 
      update_link = <a href="/update" data-mode='update' onClick={/*this.*/onClickHandler}>
                      update</a>
      delete_button = <input type="button" value="delete" data-mode='delete'
                        onClick={/*this.*/onClickHandler} />
    }

    return (
      <>
        <a href="/create" data-mode='create' onClick={/*this.*/onClickHandler}>create</a> &nbsp;&nbsp;
        {update_link} &nbsp;&nbsp;     
        {delete_button}
      </>
    );
  //}
}

export default Control;