import { render, fireEvent } from "@testing-library/react";
import { DragonCard } from "../DragonCard";
import { api } from "../../services/api";
import { ListDragonContext } from "../../context/ListDragonContext";

jest.mock("../../services/api");
jest.mock("../../context/ListDragonContext");
jest.mock("../../utils/formattedData");

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

describe("DragonCard", () => {
  jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useContext: jest.fn().mockReturnValue(mockContextValue),
  }));
  const dragon = {
    createdAt: new Date("2022-01-01T00:00:00.000Z"),
    name: "Test Dragon",
    type: "Test Type",
    histories: "Test Histories",
    id: 1,
  };
  const setListDragon = jest.fn();
  const ListDragonContextValue = {
    listDragon: [dragon],
    setListDragon,
    filteredListDragon: jest.fn(),
    setSearchDragon: jest.fn(),
    searchDragon: "",
  };

  it("renders the dragon name and type", () => {
    const { getByText } = render(<DragonCard {...dragon} />);

    expect(getByText(dragon.name)).toBeInTheDocument();
    expect(getByText(dragon.type)).toBeInTheDocument();
  });

  it("renders the histories if present", () => {
    const { getByText } = render(<DragonCard {...dragon} />);

    expect(getByText(dragon.histories)).toBeInTheDocument();
  });


  it("deletes the dragon when the trash button is clicked", async () => {
    const { getByAltText } = render(
      <ListDragonContext.Provider value={ListDragonContextValue}>
        <DragonCard {...dragon} />
      </ListDragonContext.Provider>,
    );

    fireEvent.click(getByAltText("trash"));

    expect(api.delete).toHaveBeenCalledWith("/1");

  });

  it('renders the `ModalEditDragon` component when the edit button is clicked', () => {
    const { getByTestId,getByText } = render(
      <ListDragonContext.Provider value={ListDragonContextValue}>
        <DragonCard {...dragon} />
      </ListDragonContext.Provider>,
    );

    fireEvent.click(getByTestId('editar'));

    expect(getByText('Editar seu Dragão')).toBeInTheDocument();
  });
});
