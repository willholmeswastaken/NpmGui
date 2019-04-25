import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Finder from '../finder'

Enzyme.configure({ adapter: new Adapter() })

const setup = propOverrides => {
    const props = Object.assign({
        moduleName: 'test',
        onModuleNameChange: jest.fn(),
        onRequestModule: jest.fn(),
        isFetching: false
    }, propOverrides)

    var wrapper = shallow(<Finder {...props} />);

    return {
        props,
        wrapper,
        simulateInput: () => wrapper.find('TextField').simulate('change', { target: { value: 'testnew' } })
    }
}

describe('<Finder />', () => {
    it('successfully triggers input change', () => {
        const { props, simulateInput } = setup()
        simulateInput()
        expect(props.onModuleNameChange).toHaveBeenCalled()
    })
})