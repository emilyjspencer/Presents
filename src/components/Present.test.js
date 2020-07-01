import React from 'react';
import { shallow } from 'enzyme';
import Present from './Present';


describe('Present', () => {

    const mockRemove = jest.fn();
    const id = 1;
    const props = { present: { id }, removePresent: mockRemove };

    let wrapper;

    beforeEach(() => wrapper = shallow(<Present {...props} />));

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('initializes a person and present in the component state', () => {
        expect(wrapper.state()).toEqual({ person: '', present: '' });
    });



    describe('when entering a persons name', () => {

      beforeEach(() => {
        wrapper.find('.name').simulate('change', { target: { value: 'Laura' }});
      });
    
      it('updates the person in the component state', () => {
        expect(wrapper.state().person).toEqual('Laura');
      });
    });

    describe('when entering a present', () => {

        beforeEach(() => {
             wrapper.find('.present').simulate('change', { target: { value: 'Barbie' }});
        });

        it('updates the present in the component state', () => {
            expect(wrapper.state().present).toEqual('Barbie');
        });
    });

    describe('clicking the remove gift button', () => {

        beforeEach(() => {
            wrapper.find('.remove-button').simulate('click');
        });

        it('the removePresent callback is invoked upon button click', () => {
          expect(mockRemove).toHaveBeenCalledWith(id)
        });
    });

});