import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Result from '../result'

Enzyme.configure({ adapter: new Adapter() })

const setup = propOverrides => {
  const props = Object.assign(
    {
      module: null,
      open: true,
      onResultClose: jest.fn(),
      isFetching: false
    },
    propOverrides
  )

  var wrapper = shallow(<Result {...props} />)

  return {
    props,
    wrapper,
    fetchingMessages:
      wrapper.contains('Fetching module...') &&
      wrapper.contains('Fetching module description...'),
    closeButtonClick: () => wrapper.find('WithStyles(Button)').simulate('click')
  }
}

describe('<Result />', () => {
  it('displays fetching messages when fetching package', () => {
    const { wrapper, fetchingMessages } = setup({ isFetching: true })
    expect(fetchingMessages).toBeTruthy()
  })
  it('registers an onresultclose event when closebutton is clicked on dialog', () => {
      const { wrapper, props, closeButtonClick } = setup()
      closeButtonClick()
      expect(props.onResultClose).toHaveBeenCalled()
  })
})
