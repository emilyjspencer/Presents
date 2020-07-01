import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';


class Present extends Component {

    constructor() {
        super();

        this.state = { person: '', present: ''}
    }

    render() {
       return (
         <div>
           <Form>
               <FormGroup>
                   <ControlLabel>Name</ControlLabel>
                   <FormControl onChange={event => this.setState({ person: event.target.value })} className="name" />
               </FormGroup>
           </Form>
         </div>
        )
    }
};

export default Present;