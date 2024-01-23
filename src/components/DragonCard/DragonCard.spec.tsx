
import { render,fireEvent } from '@testing-library/react';
import { DragonCard } from '../DragonCard';
import { api } from '../../services/api';
// import { ListDragonContextProvider } from '../../utils/mock/ListDragonContentextMock';
import { ListDragonContext } from '../../context/ListDragonContext';
// import { ModalEditDragon } from '../ModalEditDragon';
// import { formattedData } from '../../utils/formattedData';

jest.mock('../../services/api');
jest.mock('../../context/ListDragonContext');
jest.mock('../../utils/formattedData');








const mockContextValue = {
  setListDragon: jest.fn(),
  listDragon: [{ id: 1, name: 'Dragon 1', type: 'Fire', histories: 'History 1', createdAt: '2022-01-01' }],
};



describe('DragonCard', () => {

  jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: jest.fn().mockReturnValue(mockContextValue),
  }));
  const dragon = {
    createdAt: new Date('2022-01-01T00:00:00.000Z'),
    name: 'Test Dragon',
    type: 'Test Type',
    histories: 'Test Histories',
    id: 1,
  };
  const setListDragon = jest.fn();
  const ListDragonContextValue = {
    listDragon: [dragon],
    setListDragon,
    filteredListDragon: jest.fn(),
    setSearchDragon: jest.fn(),
    searchDragon: ""
  };




  it('renders the dragon name and type', () => {
    const { getByText } = render(<DragonCard {...dragon} />);



    expect(getByText(dragon.name)).toBeTruthy();
    expect(getByText(dragon.type)).toBeTruthy();
  });

  it('renders the histories if present', () => {
    const { getByText } = render(<DragonCard {...dragon} />);

    expect(getByText(dragon.histories)).toBeInTheDocument();
  });

  // it('renders the creation date', () => {
  //   const { getByText } = render(<DragonCard {...dragon} />);

  //   expect(getByText('01/01/2022')).toBeInTheDocument();
  // });

  it('deletes the dragon when the trash button is clicked', async () => {
    const { getByAltText } = render(
      <ListDragonContext.Provider value={ListDragonContextValue}>
        <DragonCard {...dragon} />
      </ListDragonContext.Provider>,
    );

    fireEvent.click(getByAltText('trash'));


    expect(api.delete).toHaveBeenCalledWith('/1');
    // expect(setListDragon).toHaveBeenCalledWith([...listDragon].filter(d => d.id !== dragon.id));
  });
});
