import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import './style.css';
import { Joke } from './Joke/INDEX';
import { jokes } from './jokes';

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
