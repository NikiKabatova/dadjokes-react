import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import './style.css';
import { Joke } from './Joke/INDEX';

const jokes = [
  {
    id: 'user01',
    avatar:
      'https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png',
    name: 'Neroxx',
    text: 'The secret service isn\'t allowed to yell "Get down!" anymore when the president is about to be attacked. Now they have to yell "Donald, duck!"',
    likes: 13,
    dislikes: 24,
  },
];

const App = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <>
      <div className="container">
        {jokes.map((item) => (
          <Joke userName={item.userName} />
        ))}
      </div>
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
