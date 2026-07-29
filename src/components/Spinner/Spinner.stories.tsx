import { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";
import { Button } from "../Button";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Sizes of spinner",
      table: { defaultValue: { summary: "md" } },
    },

    variant: {
      control: "select",
      options: ["primary", "secondary", "white"],
      description:
        "Color variant of spinner. Use 'white' on dark background only",
      table: { defaultValue: { summary: "primary" } },
    },

    label: {
      control: "text",
      description: "Accessible label for screen readers",
      table: { defaultValue: { summary: "Loading..." } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: "md",
    variant: "primary",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const WhiteOnDark: Story = {
  args: {
    variant: "white",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#1e293b",
          padding: "24px",
          borderRadius: "8px",
          display: "inline-block",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Spinner variant="primary" />
      <Spinner variant="secondary" />
      <div
        style={{
          backgroundColor: "#1e293b",
          padding: "12px",
          borderRadius: "6px",
        }}
      >
        <Spinner variant="white" />
      </div>
    </div>
  ),
};

export const InsideButton: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <Button variant="primary" disabled>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Spinner variant="white" size="sm" />
          Saving...
        </div>
      </Button>

      <Button variant="secondary" disabled>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Spinner variant="primary" size="sm" />
          Loading...
        </div>
      </Button>
    </div>
  ),
};
