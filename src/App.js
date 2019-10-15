import React from 'react';

import GlobalStyle from './styles/global';

const data = [
  {
    title: 'titulo da noticia',
    descriiption: 'descriçao da noticia',
    tags: [
      'node', 'react', 'php'
    ]
  },
  {
    title: 'titulo da noticia2',
    descriiption: 'descriçao da noticia',
    tags: [
      'node', 'react', 'php'
    ]
  },
]

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>VUTTR</h1>
      <h2>Very Useful Tools to Remember</h2>
      <div>
        <span>Search</span>
        <span>search in tags only</span>
        <span>+ Add</span>
      </div>
      <div>
        {
          data.map(item => (
            <section>
              <h2>{item.title}</h2>
              <div>{item.descriiption}</div>
              <div>{item.tags.map(tag => <span>{tag}</span>)}</div>
              <div>X remove</div>
            </section>
          ))
        }
      </div>
    </>
  );
}

export default App;
