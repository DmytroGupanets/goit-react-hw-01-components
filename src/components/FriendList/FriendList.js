import React from 'react';
import PropTypes from 'prop-types';
import styled from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styled.friendlist}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li className={styled.item} key={id}>
        <span className={isOnline ? styled.online : styled.offline}></span>
        <img className={styled.avatar} src={avatar} alt={name} width="48" />
        <p className={styled.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  avatar: PropTypes.objectOf(PropTypes.string),
  name: PropTypes.objectOf(PropTypes.string.isRequired),
  id: PropTypes.objectOf(PropTypes.number.isRequired),
  isOnline: PropTypes.objectOf(PropTypes.bool.isRequired),
};

export default FriendList;
