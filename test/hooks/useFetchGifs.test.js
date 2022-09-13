import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {
  test('debe de retornar el estado inicial', () => {
    // const { images, isLoading } = useFetchGifs();
    const { result } = renderHook(() => useFetchGifs('Naruto'));
    const { images, isLoading } = result.current;
    // console.log(result)

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('debe de retornar un arreglo de imagenes y isLoadin en false', async () => {
    const { result } = renderHook(() => useFetchGifs('Naruto'));

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      {
        timeout: 1500,
      }
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
