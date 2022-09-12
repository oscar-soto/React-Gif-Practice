import PropTypes from 'prop-types';
import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState('');
  const handlerInput = ({ target }) => {
    const value = target.value;
    setinputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInputValue = inputValue.trim();
    // console.log('disparando desde jest')

    // Validar que tenga mas de un caracter
    if (newInputValue.length <= 1) return;

    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(newInputValue);
    setinputValue('');
  };

  return (
    <form aria-label="form" action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Bucar Gifs"
        value={inputValue}
        onChange={handlerInput}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
