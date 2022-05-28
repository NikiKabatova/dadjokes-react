import React from 'react';
import './style.css';
import { useState } from 'react';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  // const handleLikes = () => setLikes(likes + 1);
  // const handleDislikes = () => setDislikes(dislikes + 1);
  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>
        <p className="joke__text">{text}</p>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={() => {
              setLike(like + 1);
            }}
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {likes}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={() => {
              setDislike(dislike + 1);
            }}
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {dislikes}
          </span>
        </div>
      </div>
    </div>
  );
};
