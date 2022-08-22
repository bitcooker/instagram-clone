import { generateAllUsersEdges } from "../../../libs/faker";
import { UsersList } from ".";
import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";

export default {
  component: UsersList,
  title: "organisms/Users List"
} as ComponentMeta<typeof UsersList>;

export const usersList: ComponentStoryObj<typeof UsersList> = {
  args: {
    usersEdge: generateAllUsersEdges,
    width: "400px"
  }
};
