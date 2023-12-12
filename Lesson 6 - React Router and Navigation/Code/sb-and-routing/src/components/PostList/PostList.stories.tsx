import { ComponentType } from 'react';
import { MemoryRouter } from 'react-router-dom';

import PostList from './PostList';

export default {
  title: "Components/PostList",
  component: PostList,
  decorators: [
    (Story: ComponentType) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = () => <PostList userId={1} />;
