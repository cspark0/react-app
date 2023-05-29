import React, { useEffect } from 'react';
import './App.css';

function App() {
  var [funcShow, setFuncShow] = React.useState(true);
  var [classShow, setClassShow] = React.useState(true);

  return (
    <div className="container">
      <h1>Hello World</h1>
      <input type="button" value="remove func" onClick={
          () => { setFuncShow(false) }
        }/>
      <input type="button" value="remove class" onClick={
          () => { setClassShow(false) }
        }/>        
      {funcShow ? <FuncComp initNumber={4}></FuncComp> : null}
      {classShow ? <ClassComp initNumber={5}></ClassComp> : null}
    </div>
  )
}

var funcStyle = 'color:blue';
var funcId = 0;

function FuncComp(props) {
  var [number, setNumber] = React.useState(props.initNumber);
  var [date, setDate] = React.useState(new Date());
  console.log('%cfunc => render ' + (++funcId), funcStyle);

  useEffect(() => {
    console.log('%cfunc => useEffect ' + (++funcId), funcStyle);
    document.title = number + ': ' + date;
    return function() {
      console.log('%cfunc => useEffect return ' + (++funcId), funcStyle);
    }
  }, []);

  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number: {number}</p>
      <p>Date: {date.toString()}</p>
      <input type="button" value="random" onClick={
          function() {
            setNumber(Math.random());
          }
        } />
      <input type="button" value="date" onClick={
          function() {
            setDate(new Date());
          }
        } />
    </div>
  )
}

class ClassComp extends React.Component {
  
  state = {
    number: this.props.initNumber,
    date: new Date()
  };
  classStyle = 'color:red';
  
  constructor(props) {
    super(props);
    console.log('%cclass => constructor',  this.classStyle);
  }
  
  componentWillMount() {
    console.log('%cclass => componentWillMound',  this.classStyle);
  }

  componentDidMount() {
    console.log('%cclass => componentDidMound',  this.classStyle);
  }

  shouldComponentUpdate() {
    console.log('%cclass => shouldComponentUpdate',  this.classStyle);
    return true;
  }

  componentWillUpdate() {
    console.log('%cclass => componentWillUpdate', this.classStyle);
  }

  componentDidUpdate() {
    console.log('%cclass => componentDidUpdate',  this.classStyle);
  }

  componentWillUnmount() {
    console.log('%cclass => componentWillUnmount',  this.classStyle);
  }

  render() {
    console.log('%cclass => render',  this.classStyle);

    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number: {this.state.number}</p>
        <p>Date: {this.state.date.toString()}</p>
        <input type="button" value="random" onClick={
          function() {
            this.setState({number: Math.random()});
          }.bind(this)
        } />
        <input type="button" value="date" onClick={
          function() {
            this.setState({date: new Date()});
          }.bind(this)
        } />
      </div>
    );
  }
}

export default App;
