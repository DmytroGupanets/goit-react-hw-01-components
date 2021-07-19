import React from 'react';
import PropTypes from 'prop-types';
import styled from './Transactions.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styled.transaction}>
    <thead className={styled.thead}>
      <tr className={styled.headrow}>
        <th className={styled.headcell}>Type</th>
        <th className={styled.headcell}>Amount</th>
        <th className={styled.headcell}>Currency</th>
      </tr>
    </thead>

    <tbody className={styled.tbody}>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td className={styled.bodycell}>{type}</td>
          <td className={styled.bodycell}>{amount}</td>
          <td className={styled.bodycell}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  id: PropTypes.objectOf(PropTypes.string.isRequired),
  type: PropTypes.objectOf(PropTypes.string.isRequired),
  amount: PropTypes.objectOf(PropTypes.number.isRequired),
  currency: PropTypes.objectOf(PropTypes.string.isRequired),
};

export default TransactionHistory;
