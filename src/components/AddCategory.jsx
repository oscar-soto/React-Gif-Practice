import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState('');
  const handlerInput = ({ target }) => {
    const value = target.value;
    setinputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInputValue = inputValue.trim()

    // Validar que tenga mas de un caracter
    if (newInputValue.length <= 1) return;

    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(newInputValue)
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
