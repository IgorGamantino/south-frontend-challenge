import { fireEvent, render  } from '@testing-library/react';
import { ListDragonContext } from '../../context/ListDragonContext';
import { ModalEditDragon } from '.';

describe('ModalEditDragon', () => {
  const dragonProps = {
    id: 1,
    name: 'Test Dragon',
    type: 'Test Type',
    histories: 'Test Histories',
  };

  const listDragon = [
    {
      id: 1,
      name: 'Test Dragon',
      type: 'Test Type',
      histories: 'Test Histories',
      createdAt: '2022-01-01T00:00:00.000Z',
    },
  ];



  jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useContext: jest.fn().mockReturnValue(mockContextValue),
  }));


  const mockContextValue =  {
    listDragon,
    setListDragon: jest.fn(),
    filteredListDragon: jest.fn(),
    setSearchDragon: jest.fn(),
  };

  const ListDragonContextValue = {
    listDragon: [],
    setListDragon: jest.fn(),
    filteredListDragon: jest.fn(),
    setSearchDragon: jest.fn(),
    searchDragon: "",
  };




  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component with the correct initial values', () => {
    const { getByTestId,getByPlaceholderText } = render(
      <ListDragonContext.Provider value={ListDragonContextValue}>
        <ModalEditDragon dragonProps={dragonProps} />
      </ListDragonContext.Provider>
    );

    fireEvent.click(getByTestId('editar'));

    expect(getByPlaceholderText('Name')).toBeInTheDocument();
    expect(getByPlaceholderText('Type')).toBeInTheDocument();
    expect(getByPlaceholderText('Histories')).toBeInTheDocument();
  });

});
