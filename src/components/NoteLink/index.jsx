import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NoteLink = ({ children, isLink, href, to, className }) => {
  return isLink ? (
    <a href={href} className={className}>
      {children}
    </a>
  ) : (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

NoteLink.propTypes = {
  isLink: PropTypes.bool,
  href: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
};

NoteLink.defaultProps = {
  isLink: false,
  href: 'http://localhost:3000',
  to: '/dashboard',
  className: '',
};

export default NoteLink;
