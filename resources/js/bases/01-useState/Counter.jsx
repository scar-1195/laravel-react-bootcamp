import { useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(100);

  //* Estandares de nombres para las funciones
  // const onIncrement
  // ? const handleIncrement

  const hanldeIncriment = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>use state</h1>
      <hr />

      <div className='d-flex'>
        <h2>Valor:</h2>
        <h2
          style={{
            marginLeft: '1rem',
            marginTop: '5px',
          }}
        >
          {counter}
        </h2>
      </div>

      <div style={{ width: '20rem' }} className='d-flex justify-content-around'>
        <button onClick={hanldeIncriment} className='btn btn-success'>
          Incrementar
        </button>
        <button className='btn btn-warning'>Restar</button>
        <button className='btn btn-danger'>Reset</button>
        <button className='btn btn-dark'>Increment By 10</button>
      </div>
    </>
  );
};
