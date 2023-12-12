import { ComponentType } from "react";
import { MemoryRouter } from "react-router-dom";
import UserList from "./UserList";

export default {
  title: "Components/UserList",
  component: UserList,
  decorators: [
    (Story: ComponentType) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = () => <UserList />;
