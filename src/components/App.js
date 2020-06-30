import React, { Component } from 'react';


class App extends Component {
    constructor(props){
        super(props)
    

       this.state = { presents: [] }
    };

    addPresent(present) {
        this.state.presents.push(present)
    };


    render() {
      return(
        <div>
          <h2>Presents</h2>
        </div>
      )
    }
};

export default App;