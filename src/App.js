import React from 'react';

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
            <>
              <div>{item.title}</div>
              <div>{item.descriiption}</div>
              <div>{item.tags.map(tag => <span>{tag}</span>)}</div>
              <div>X remove</div>
            </>
          ))
        }
      </div>
    </>
  );
}

export default App;
