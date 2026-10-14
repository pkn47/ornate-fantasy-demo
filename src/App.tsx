import React from 'react';

interface Props {
  title?: string;
}

const App: React.FC<Props> = ({ title = 'ornate fantasy demo' }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>hello</p>
    </div>
  );
};

export default App;