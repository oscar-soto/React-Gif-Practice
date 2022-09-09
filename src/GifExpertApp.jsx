import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = () => {
    const newCategories = [...categories, 'Naruto'];
    setCategories(newCategories);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory setCategories={setCategories} />

      {/* listado de gif */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* Gif Item */}
    </>
  );
};
