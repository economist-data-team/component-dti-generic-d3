import 'babel-polyfill';
import DtiGenericD3 from '../src';
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
chai.use(chaiEnzyme()).should();
describe('DtiGenericD3', () => {

  it('renders a React element', () => {
    React.isValidElement(<DtiGenericD3 />).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let dtiGenericD3 = null;
    beforeEach(() => {
      rendered = mount(<DtiGenericD3 />);
      dtiGenericD3 = rendered.find('.dti-generic-d-3');
    });

    it('renders a top level div.dti-generic-d-3', () => {
      dtiGenericD3.should.have.tagName('div');
      dtiGenericD3.should.have.className('dti-generic-d-3');
    });

    xit('renders <FILL THIS IN>', () => {
      dtiGenericD3.should.have.exactly(1).descendants('.the-descendent-class');
      dtiGenericD3.find('.the-descendent-class').should.have.tagName('TAG');
    });

  });

});
