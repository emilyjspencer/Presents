import React from 'react';
import { shallow } from 'enzyme';
import Present from './Present';


describe('Present', () => {

    let wrapper;

    beforeEach(() => wrapper = shallow(<Present />));

    it('renders a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('initializes a person and present in the component state', () => {
        expect(wrapper.state()).toEqual({ person: '', present: '' });
    });

});