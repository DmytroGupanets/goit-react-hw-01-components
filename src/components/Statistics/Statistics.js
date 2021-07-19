import React from 'react';
import PropTypes from 'prop-types';
import styled from './Statistics.module.css';

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

const Statistics = ({ title, stats }) => (
  <section className={styled.statistics}>
    {title && <h2 className={styled.title}>{title}</h2>}
    <ul className={styled.list}>
      {stats.map(({ id, label, percentage }) => (
        <li className={styled.item} key={id} style={randomColor()}>
          <span className={styled.label}>{label}</span>
          <span className={styled.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
