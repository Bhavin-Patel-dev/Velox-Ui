import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", description: "Label displayed above the input" },
    helperText: {
      control: "text",
      description: "Helper text displayed below the input",
    },
    errorText: {
      control: "text",
      description: "Error message - takes priority over helper text",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the input",
      table: { defaultValue: { summary: "md" } },
    },
    isFullWidth: {
      control: "boolean",
      description: "Stretches input to full container width",
      table: { defaultValue: { summary: "false" } },
    },
    disabled: {
      control: "boolean",
      description: "Disabled the input",
      table: { defaultValue: { summary: "false" } },
    },
    placeholder: { control: "text", description: "Placeholder text" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = { args: { placeholder: "Enter text..." } };

export const WithLabel: Story = {
  args: { label: "Email", placeholder: "Enter your email" },
};

export const WithHelperText: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    helperText: "Must be at least 8 character's",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    helperText: "Email is required",
  },
};

export const Disabled: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: "Full Width Input",
    placeholder: "This stretches full width",
    isFullWidth: true,
  },
};

export const AllSize: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Input size="sm" placeholder="Small input" label="Small" />
      <Input size="md" placeholder="Medium input" label="Medium" />
      <Input size="lg" placeholder="Large input" label="Large" />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "320px",
      }}
    >
      <Input label="Full Name" placeholder="Joey Tribbiani" isFullWidth />
      <Input
        label="Email"
        placeholder="joey365.tribbiani@yahoo.com"
        isFullWidth
      />
      <Input
        label="Password"
        placeholder="Min 8 characters"
        helperText="Must contain uppercase and numder"
        isFullWidth
      />
    </div>
  ),
};
