import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { mount } from 'enzyme'



//testing rendering of the cats...
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, 'div');
  ReactDOM.unmountComponentAtNode(div);
});

//testing cration of form...
it("renders create a cat form", () => {
  const app = mount(<App />)
  expect(app.find('.subtitle').text()).toEqual('Add a Cat')
})

//testing index page...
it("links to cat index", () => {
  const app = mount(<App />)
  app.find('a#cats-link').simulate('click', { button: 0 })
  expect(app.find('.subtitle').text()).toEqual('All the Cats')
})
