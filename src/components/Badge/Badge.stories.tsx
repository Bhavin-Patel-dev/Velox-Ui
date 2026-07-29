import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "warning", "error", "info", "neutral"],
      description: "Visual style of the badge",
      table: {
        defaultValue: { summary: "neutral" },
      },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of a badge",
      table: { defaultValue: { summary: "md" } },
    },
    children: {
      control: "text",
      description: "content inside the badge",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { children: "Badge" },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Active",
  },
};

export const Warning: Story = {
  args: { variant: "warning", children: "Pending" },
};

export const Error: Story = { args: { variant: "error", children: "Failed" } };

export const Info: Story = { args: { variant: "info", children: "New" } };

export const Neutral: Story = {
  args: { variant: "neutral", children: "Draft" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Badge variant="success">Active</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="error">Failed</Badge>
      <Badge variant="info">New</Badge>
      <Badge variant="neutral">Draft</Badge>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "14px", color: "#374151" }}>Order #1234</span>
        <Badge variant="success">Delivered</Badge>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "14px", color: "#374151" }}>Order #1235</span>
        <Badge variant="warning">Processing</Badge>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "14px", color: "#374151" }}>Order #1236</span>
        <Badge variant="error">Cancelled</Badge>
      </div>
    </div>
  ),
};
