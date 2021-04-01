import React, { Component }from 'react';
import './App.css';
import Contacts from './Contacts';
import SearchBox from './SearchBox';
import Loading from './Loading';
import Scroll from './Scroll';

class App extends Component {

  constructor(){
    super();
    this.state = {
      directory : [],
      searchfield : ''
    }
  }

  componentDidMount(){
    fetch('https://my-json-server.typicode.com/yakraj/contact-detail/Lists')
    .then(giveback => giveback.json())
    .then(Lists =>this.setState({directory: Lists}));
  }


onSearchChange = (event) => {
  this.setState({searchfield: event.target.value});
}




  render() {
              const { directory, searchfield} = this.state;
               const filteredContacts = directory.filter(hello =>{
             return hello.title.toLowerCase().includes(searchfield.toLowerCase());

    });
  return !directory.length ? <Loading/> : (
    <div className="tc">
        <h2>All India emergency calls</h2>
       <h1>Contact Directory</h1>
       <SearchBox searchChage={this.onSearchChange}/>
       <Scroll>
       <Contacts directory={filteredContacts}/>
       </Scroll>

    </div>
  );
  }
 
}

export default App;
