import React from 'react';
import ReactDOM from 'react-dom/client';
import Clicker from './clicker'


class App extends React.Component {

  state = { count: 0 }
  
  componentDidMount = () => {
    console.log('componentDidMount')
  }

  componentDidUpdate = () => {
    console.log('componentDidUpdate');
  }

  componentWillUnmount = () => {
    console.log('componentWillUnmount');
  }

  clickUp = () => {
    this.setState({ count: this.state.count + 1 })
  }
  
  clickDown = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div>
        <div>
          {this.state.count} <br/>
        </div>
        <button onClick={this.clickUp}>+1</button>
        <button onClick={this.clickDown}>-1</button>
        <br/><br/>
        <Clicker/>
      </div>
    )
  }
  }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
