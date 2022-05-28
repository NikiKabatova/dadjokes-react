import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import './style.css';
import { Joke } from './Joke/INDEX';
import { jokes } from './jokes';

const App = () => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const handleLikes = () => setLike(like + 1);
  const handleDislikes = () => setDislike(dislike + 1);
  return (
    <div className="container">
      {jokes.map((item) => (
        <Joke
          key={item.id}
          userAvatar={item.avatar}
          userName={item.name}
          text={item.text}
          likes={handleLikes}
          dislikes={handleDislikes}
        />
      ))}
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
