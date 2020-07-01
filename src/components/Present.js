import React, { Component } from 'react';
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';


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
                   <FormLabel>Name</FormLabel>
                   <FormControl onChange={event => this.setState({ person: event.target.value })} className="name" />
               </FormGroup>
               <FormGroup>
                   <FormLabel>Present</FormLabel>
                   <FormControl onChange={event => this.setState({ present: event.target.value })} className="present" />
               </FormGroup>
           </Form>

         </div>
        )
    }
};

export default Present;