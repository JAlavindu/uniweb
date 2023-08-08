import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      options: ["icon", "default", "round", "two-icons", "left-icon", "right-icon", "dropdown"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "small", "extra-small", "default"],
      control: { type: "select" },
    },
    corner: {
      options: ["rounded", "rectangle"],
      control: { type: "select" },
    },
    style: {
      options: ["primary", "dark", "light"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    number: "1",
    showRightIcon: true,
    showLeftIcon: true,
    text: "Button",
    type: "icon",
    size: "large",
    corner: "rounded",
    style: "primary",
    className: {},
  },
};
