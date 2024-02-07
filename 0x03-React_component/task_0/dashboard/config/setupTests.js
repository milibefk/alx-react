import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
// setupTests.js
import util from 'util';

Object.defineProperty(global, 'TextEncoder', {
  value: util.TextEncoder,
});


Enzyme.configure({ adapter: new Adapter() });
