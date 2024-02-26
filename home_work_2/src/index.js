import React from 'react';
import ReactDOM from 'react-dom/client';

import List from './sidecomponent'


class App extends React.Component {

  constructor(){
    super()
    this.state = { text: 'first'}
  }  

  validateForm(e){
    let btn = document.querySelector('.SubmitBtn');
    btn.disabled = false
    if(e.target.value.indexOf('react')>= 0){
      btn.disabled = true
    }
  }

  focusInput(e){
    e.preventDefault();
    document.querySelector('.input-text').focus()
  }

  render() {
    return (
      <form>
        <input onChange={ e => this.validateForm(e)} type='text' className='input-text' ></input>
        <button className='SubmitBtn' type='submit'>Отправить</button>
        <button onClick = {e=> this.focusInput(e)} className='FocusBtn' type='submit'>Фокус</button>
      </form>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <List listItem={[1,2,3,4,5,6]}/>
  </React.StrictMode>
);
