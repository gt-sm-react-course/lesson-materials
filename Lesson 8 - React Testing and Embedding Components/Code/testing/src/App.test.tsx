import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import useFetchUsers from "./hooks/useFetchUsers";

jest.mock("./hooks/useFetchUsers");

const mockUseFetchUsers = useFetchUsers as jest.Mock;

describe("App Component", () => {
  beforeEach(() => {
    mockUseFetchUsers.mockReturnValue([
      {
        userId: 1,
        firstname: "John",
        lastname: "Doe",
        email: "john@example.com",
      },
      {
        userId: 2,
        firstname: "Jane",
        lastname: "Doe",
        email: "jane@example.com",
      },
    ]);
  });

  test('App component snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders the users list component", () => {
    render(<App />);
    expect(screen.getByText("Users List")).toBeInTheDocument();
    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Jane")).toBeInTheDocument();
  });

  test("filters users by first name", async () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText("Filter by First Name"), {
      target: { value: "John" },
    });
    fireEvent.click(screen.getByText("Filter"));

    await waitFor(() => {
      expect(screen.queryByText("Jane")).not.toBeInTheDocument();
      expect(screen.getByText("John")).toBeInTheDocument();
    });
  });

  test("filters users by last name", async () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText("Filter by Last Name"), {
      target: { value: "Doe" },
    });
    fireEvent.click(screen.getByText("Filter"));

    await waitFor(() => {
      expect(screen.getByText("John")).toBeInTheDocument();
      expect(screen.getByText("Jane")).toBeInTheDocument();
    });
  });

  test("displays no records message when no users match the filter", async () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText("Filter by Email"), {
      target: { value: "nonexistent@example.com" },
    });
    fireEvent.click(screen.getByText("Filter"));

    await waitFor(() => {
      expect(screen.getByText("No Records")).toBeInTheDocument();
    });
  });
});
