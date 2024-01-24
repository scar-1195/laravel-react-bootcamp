import { useState } from 'react';
import { Message } from './Message';

export const EffectCleunUp = () => {
  const [showComponent, setshowComponent] = useState(false);

  const hanldeChangeFlag = () => {
    setshowComponent(prev => !prev);
  };

  return (
    <>
      <h1>Effect Cleun Up</h1>
      <hr />

      <h3>
        Componente:{' '}
        {showComponent === false
          ? 'Componente desmontado'
          : 'Componente Montado'}
      </h3>

      {showComponent && <Message />}

      <button onClick={hanldeChangeFlag}>
        {!showComponent ? 'Montar' : 'Desmontar'}
      </button>
    </>
  );
};
