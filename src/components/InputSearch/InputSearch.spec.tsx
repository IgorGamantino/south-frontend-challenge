import { render, fireEvent } from '@testing-library/react';
import {InputSearch} from '../InputSearch';
import { ListDragonContext } from '../../context/ListDragonContext';

describe('InputSearch', () => {

  const mockContextValue = {
    setListDragon: jest.fn(),
    listDragon: [
      {
        id: 1,
        name: "Dragon 1",
        type: "Fire",
        histories: "History 1",
        createdAt: "2022-01-01",
      },
    ],
  };
  jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useContext: jest.fn().mockReturnValue(mockContextValue),
  }));

  const setSearchDragon = jest.fn();
  const searchDragon = 'dragon';

  const ListDragonContextValue = {
    listDragon: [],
    setListDragon: jest.fn(),
    filteredListDragon: jest.fn(),
    setSearchDragon,
    searchDragon,
  };

  it('should render the input element with the correct placeholder and class name', () => {
    const { getByPlaceholderText } = render(
      <ListDragonContext.Provider value={ListDragonContextValue}>
        <InputSearch />
      </ListDragonContext.Provider>,
    );

    const inputElement = getByPlaceholderText('Pesquise pelo nome do dragão');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass('px-2 mb-4 h-10 w-full bg-blue200 rounded-lg placeholder-[#fff]');
  });


  it('should call the `setSearchDragon` function with the correct value when the input value changes', () => {
    const { getByTestId } = render(
      <ListDragonContext.Provider value={ListDragonContextValue}>
        <InputSearch />
      </ListDragonContext.Provider>,
    );

    const inputElement = getByTestId('input');

    fireEvent.change(inputElement, { target: { value: 'dragons' } });

    expect(setSearchDragon).toHaveBeenCalledWith('dragons');
  });
});
