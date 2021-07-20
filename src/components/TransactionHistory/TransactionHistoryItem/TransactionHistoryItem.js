import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistoryItem.module.css';

const TransactionHistoryItem = ({ type, amount, currency }) => (
  <tr>
    <td className={styles.bodycell}>{type}</td>
    <td className={styles.bodycell}>{amount}</td>
    <td className={styles.bodycell}>{currency}</td>
  </tr>
);

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;
