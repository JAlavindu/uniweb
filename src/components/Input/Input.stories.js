import { Input } from ".";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: {
      options: ["right-icon", "two-icons", "left-icon", "default"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "small", "default"],
      control: { type: "select" },
    },
    corner: {
      options: ["rounded", "rectangle"],
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
    labelText: "Label",
    text: "Text",
    type: "right-icon",
    size: "large",
    corner: "rounded",
    label: true,
    style: "dark",
    className: {},
    inputClassName: {},
  },
};
