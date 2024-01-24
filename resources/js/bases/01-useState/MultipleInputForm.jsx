import { useState } from 'react';

export const MultipleInputForm = () => {
  // * 1 Hacer este forulario controlado
  // * 2 Un metodo que al hacer submit me imprima en pantalla el valor del formulario
  // * 3 Un SOLO METODO para controlar el formulario

  const [form, setform] = useState({
    email: '',
    password: '',
  });

  const { email, password } = form;

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setform({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }

  return (
    <>
      <h1>Multiple Input Form</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Email address</label>
          <input
            className='form-control'
            name='email'
            onChange={handleInputChange}
            placeholder='Enter email'
            type='email'
            value={email}
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            className='form-control'
            name='password'
            onChange={handleInputChange}
            placeholder='Password'
            type='password'
            value={password}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </>
  );
};
