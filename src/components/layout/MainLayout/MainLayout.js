import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class MainLayout extends React.Component {
  rwdModeSelect = windowWidth => {
    if (
      windowWidth <= this.props.rwdModeMaxWidth.mobile &&
      this.props.rwdMode !== 'mobile'
    ) {
      this.props.setRwdMode('mobile');
    } else if (
      windowWidth > this.props.rwdModeMaxWidth.mobile &&
      windowWidth <= this.props.rwdModeMaxWidth.tablet &&
      this.props.rwdMode !== 'tablet'
    ) {
      this.props.setRwdMode('tablet');
    } else if (
      windowWidth > this.props.rwdModeMaxWidth.tablet &&
      this.props.rwdMode !== 'desktop'
    ) {
      this.props.setRwdMode('desktop');
    }
  };

  render() {
    const { children } = this.props;

    this.rwdModeSelect(window.innerWidth);

    window.addEventListener('resize', () => {
      this.rwdModeSelect(window.innerWidth);
    });

    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node,
  rwdMode: PropTypes.string,
  setRwdMode: PropTypes.func,
  rwdModeMaxWidth: PropTypes.object,
};

export default MainLayout;
