import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IndexPage from './components/indexPage';



class App extends Component {
	constructor(props){
	    super(props)
	    this.state = {
	      cats: [
	        {
	          key: 1,
	          name: 'Times',
	          about: 'sports and more...'
	        },
	        {
	          id: 2,
	          name: 'LA News',
	          about: 'cats & dogs'
	        },

	      ]
	    }
	  }
	  render() {

	    return (
	      <div className="App">
	        <header className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
	          <h1 className="App-title">Welcome to WiKi≈MåX</h1>
	        </header>
	        <p className="App-intro">
	          To get started, edit <code>src/App.js</code> and save to reload.
	        </p>
			<IndexPage/>
	      </div>
	    );
	  }

}

export default App;
