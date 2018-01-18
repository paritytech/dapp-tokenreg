// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Chip } from 'material-ui';

import IdentityIcon from '../IdentityIcon';

import styles from './chip.css';

const STYLE = {
  background: '#27ae60',
  display: 'block',
  margin: '0.5em'
};

export default class CustomChip extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,

    className: PropTypes.string,
    isAddress: PropTypes.bool,
    displayValue: PropTypes.string
  };

  render () {
    const { className, isAddress, value, label } = this.props;

    const displayValue = this.props.displayValue || value;

    return (
      <Chip
        className={ [styles.chip, className].join(' ') }
        style={ STYLE }
      >
        { this.renderIcon(isAddress, value) }
        <span className={ styles.value } title={ value }>
          { displayValue }
        </span>
        <span className={ styles.label }>
          { label }
        </span>
      </Chip>
    );
  }

  renderIcon (isAddress, address) {
    if (!isAddress) {
      return;
    }

    return (
      <IdentityIcon
        inline center
        address={ address }
      />
    );
  }
}
