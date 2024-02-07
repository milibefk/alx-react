import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';

class BodySectionWithMarginBottom extends Component {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
    title: '',
  }
  static propTypes = {
    title: PropTypes.string,
  }
  render() {
    const { title } = this.props;
    return (
      <div className='bodySectionWithMargin'>
        <BodySection {...this.props} />
      </div>
    );
  }
}
export default BodySectionWithMarginBottom;
