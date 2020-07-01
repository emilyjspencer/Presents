import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Present from './Present';


class App extends Component {
    constructor(){
        super()
    

       this.state = { presents: [] }
    };

    addPresent = () => {
        const { presents } = this.state;
        const ids = this.state.presents.map(present => present.id);

        const max_id = ids.length > 0 ? Math.max(...ids) : 0;
        presents.push({ id: max_id+1 })

        this.setState({ presents });
    };


    removePresent = (id) => {
       
        const presents = this.state.presents.filter(present => present.id !== id);

        this.setState({ presents });
    }

    render() {
      return(
        <div>
          <h2 align="center">Presents</h2>
          <div className="list">
              {
                  this.state.presents.map(present => {
                      return (
                          <Present 
                            key={present.id}
                            present={present}
                            removePresent={this.removePresent}
                           />
                          
                      )
                  })
              }
          </div>
          <Button onClick={this.addPresent} className="add-present">Add Present</Button>
          
        </div>
      )
    }
};

export default App;