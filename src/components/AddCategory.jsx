import { useState } from 'react';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState('');
  const handlerInput = ({ target }) => {
    const value = target.value;
    setinputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que tenga mas de un caracter
    if (inputValue.trim().length <= 1) return;

    setCategories((categories) => [inputValue, ...categories]);
    setinputValue('')
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Bucar Gifs"
        value={inputValue}
        onChange={handlerInput}
      />
    </form>
  );
};
