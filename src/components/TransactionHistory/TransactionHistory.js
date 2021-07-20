import React from 'react';
import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem/TransactionHistoryItem';
import styles from './Transactions.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transaction}>
    <thead className={styles.thead}>
      <tr className={styles.headrow}>
        <th className={styles.headcell}>Type</th>
        <th className={styles.headcell}>Amount</th>
        <th className={styles.headcell}>Currency</th>
      </tr>
    </thead>

    <tbody className={styles.tbody}>
      {items.map(item => (
        <TransactionHistoryItem key={item.id} {...item} />
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

export default TransactionHistory;
