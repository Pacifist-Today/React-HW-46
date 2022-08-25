import React from 'react';
import ReactDOM from 'react-dom/client';
import DefinitionsList from './components/Definitions'

const definitions = [
  { dt: 'one', dd: 'two', id: 1 },
  { dt: 'another term', dd: 'another description', id: 2 },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <DefinitionsList data = {definitions} />
  </>
);

