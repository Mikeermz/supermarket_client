import React  from 'react';
import PropTypes from 'prop-types';

import './style.css'

const Footer = ({year}) => (
  <footer> 
    Mikee Rmz  - {year}
  </footer>
);

Footer.propTypes = {
  year: PropTypes.number
}

export default Footer;
