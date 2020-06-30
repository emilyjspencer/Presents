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
});

    describe('when the add-present button is clicked', () => {
        let wrapper;

        beforeEach(() => (wrapper) = shallow(<App />))
        beforeEach(() => {
            wrapper.find('.add-present').simulate('click')
        });

      it('adds a new present to the presents array in the component state when the add present button is clicked', () => {
        expect(wrapper.state().presents).toEqual([{ id: 1 }]);
      });

      it('adds a new present to the rendered list upon button click', () => {
        wrapper.find('.add-present').simulate('click');
        expect(wrapper.find('.list').children().length).toEqual(2);
      });
  });
   

    
