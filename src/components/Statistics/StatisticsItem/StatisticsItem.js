import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticsItem.module.css';

function getRandomColor(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

const randomColor = () => {
  const colorValue = `${getRandomColor(0, 255)},${getRandomColor(
    0,
    255,
  )},${getRandomColor(0, 255)}, 0.4`;

  return {
    backgroundColor: `rgba(${colorValue})`,
  };
};

const StatisticsItem = ({ label, percentage }) => (
  <li className={styles.item} style={randomColor()}>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}%</span>
  </li>
);

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
