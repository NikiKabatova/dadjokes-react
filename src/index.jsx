import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import './style.css';

import { jokes } from './jokes';
import { Joke } from './Joke/index';

const App = () => {
  return (
    <div className="container">
      {jokes.map((item) => (
        <Joke
          key={item.id}
          userAvatar={item.avatar}
          userName={item.name}
          text={item.text}
          likes={item.likes}
          dislikes={item.dislikes}
        />
      ))}
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
