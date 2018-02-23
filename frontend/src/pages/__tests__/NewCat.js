import React from 'react';
import ReactDOM from 'react-dom';
import NewCat from '../NewCat';
import { mount } from 'enzyme'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<NewCat />, div)
})

it('has a name input', () => {
    const component = mount(<NewCat />)
    expect(component.find('label#name').text()).toBe("Name")
})

it('has a age input', () => {
    const component = mount(<NewCat />)
    expect(component.find('label#age').text()).toBe("Age")
})

it('has a enjoys input', () => {
    const component = mount(<NewCat />)
    expect(component.find('label#enjoys').text()).toBe("Enjoys")
})

it('has a submit button', () => {
    const component = mount(<NewCat />)
    expect(component.find('button#submit').text()).toBe("Create Cat Profile")
})