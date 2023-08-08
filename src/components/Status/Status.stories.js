import { Status } from ".";

export default {
  title: "Components/Status",
  component: Status,
  argTypes: {
    type: {
      options: ["color-border", "color-center", "center-color"],
      control: { type: "select" },
    },
    border: {
      options: ["two", "three", "four"],
      control: { type: "select" },
    },
    style: {
      options: ["dark", "light"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "color-border",
    border: "two",
    style: "dark",
    className: {},
  },
};
