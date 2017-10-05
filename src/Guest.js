import React from 'react';
import PropTypes from 'prop-types';

const Guest = props =>
  <li>
    <label>
      <input type="checkbox" checked={props.isConfirmed}/> Confirmed
      <span>{props.name}</span>
    </label>
    <button>edit</button>
    <button>remove</button>
  </li>;

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired
}

export default Guest;
