import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {

    let wrapper;

    beforeEach(() => wrapper = shallow(<App />));

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('renders 2 <div />', () => {
        expect(wrapper.find('div').length).toEqual(2);
    });

    it('the state has an empty array of presents', () => {
        expect(wrapper.state().presents).toEqual([]);
    });

    it('renders a Header component', () => {
        expect(wrapper.find('Header').length).toEqual(1);
    });
});

    describe('when the add-present button is clicked', () => {
        let wrapper;

        beforeEach(() => (wrapper) = shallow(<App />))
        beforeEach(() => {
            wrapper.find('.add-present').simulate('click')
        });

        

      it('adds a new present to the presents array in the component state', () => {
        expect(wrapper.state().presents).toEqual([{ id: 1 }]);
      });

      it('adds a new present to the rendered list upon button click', () => {
        wrapper.find('.add-present').simulate('click');
        expect(wrapper.find('.list').children().length).toEqual(2);
      });

      it('creates a Gift component', () => {
          expect(wrapper.find('Present').exists()).toBe(true);
      });

      describe('removing the present that was added', () => {

        let wrapper;

        beforeEach(() => wrapper = shallow(<App />));

        beforeEach(() => {
            wrapper.instance().removePresent(1);
        });

        it('removes the present from the component state', () => {
          expect(wrapper.state().presents).toEqual([]);
        });
      });
      
  });
   

    
