import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

    let wrapper;

    beforeEach(() => wrapper = shallow(<App />));

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('renders a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    
});