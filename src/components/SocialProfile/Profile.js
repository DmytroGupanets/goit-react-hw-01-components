import React from 'react';
import styled from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <div className={styled.profile}>
    <div className={styled.description}>
      <img src={avatar} alt="Аватар пользователя" className={styled.avatar} />
      <p className={styled.name}>{name}</p>
      <p className={styled.tag}>{tag}</p>
      <p className={styled.location}>{location}</p>
    </div>

    <ul className={styled.stats}>
      <li className={styled.item}>
        <span className={styled.label}>Followers</span>
        <span className={styled.quantity}>{followers}</span>
      </li>
      <li className={styled.item}>
        <span className={styled.label}>Views</span>
        <span className={styled.quantity}>{views}</span>
      </li>
      <li className={styled.item}>
        <span className={styled.label}>Likes</span>
        <span className={styled.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
);

export default Profile;
