import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Links from '../links'

Enzyme.configure({ adapter: new Adapter() })

const setup = propOverrides => {
    const props = Object.assign({
        links: {
            npm: 'testnpm',
            repository: 'testrepo'
        }
    }, propOverrides)

    var wrapper = shallow(<Links {...props} />);

    return {
        props,
        wrapper,
        npmLinkIsVisible: wrapper.contains(props.links.npm),
        repoLinkIsVisible: wrapper.contains(props.links.repository)
    }
}

describe('<Links />', () => {
    it('successfully renders an npm link and a repo link', () => {
        const { npmLinkIsVisible, repoLinkIsVisible } = setup()
        expect(npmLinkIsVisible).toBeTruthy()
        expect(repoLinkIsVisible).toBeTruthy()
    })
})