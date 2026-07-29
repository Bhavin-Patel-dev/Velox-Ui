import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Badge } from "../Badge";
import { Button } from "../Button";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["elevated", "outline", "filled"],
      description: "Visual style of the card",
      table: { defaultValue: { summary: "elevated" } },
    },
    isHoverable: {
      control: "boolean",
      description: "Add hover effect to card",
      table: { defaultValue: { summary: "false" } },
    },
    isPadded: {
      control: "boolean",
      description: "Controls internat padding of the card",
      table: { defaultValue: { summary: "true" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    variant: "elevated",
    children: "This is a basic card with some content inside.",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "This is an outline card.",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    children: "This is a filled card.",
  },
};
export const Clickable: Story = {
  args: {
    variant: "elevated",
    onClick: () => alert("Card Clicked!"),
    children: "Click me - I am a clickable card.",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Card variant="elevated">
        <p style={{ margin: 0, fontSize: "14px" }}>Elevated</p>
      </Card>

      <Card variant="outline">
        <p style={{ margin: 0, fontSize: "14px" }}>outline</p>
      </Card>

      <Card variant="filled">
        <p style={{ margin: 0, fontSize: "14px" }}>Filled</p>
      </Card>
    </div>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <Card variant="outline" style={{ width: "280px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <span style={{ fontWeight: 600, fontSize: "16px" }}>Order #1234</span>
        <Badge variant="success">Delivered</Badge>
      </div>
      <p style={{ margin: 0, fontSize: "14px", color: "#6b7280" }}>
        You order has been delivered successfully.
      </p>
    </Card>
  ),
};

export const WithButton: Story = {
  render: () => (
    <Card variant="elevated" style={{ width: "280px" }}>
      <h3 style={{ margin: "0 0 8px 0", fontSize: "18px" }}>Pro Plan</h3>
      <p style={{ margin: "0 0 16px 0", fontSize: "14px", color: "#6b7280" }}>
        Everything you need to scale your business.
      </p>
      <Button variant="primary" size="md">
        Get Started
      </Button>
    </Card>
  ),
};

export const ComposedCard: Story = {
  render: () => (
    <Card variant="outline" style={{ width: "320px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "16px",
        }}
      >
        <div>
          <h3 style={{ margin: "0 0 4px 0", fontSize: "16px" }}>
            Oliver Smith
          </h3>
          <p style={{ margin: 0, fontSize: "13px", color: "#6b7280" }}>
            Senior Frontend Engineering
          </p>
        </div>
        <Badge variant="info">Available</Badge>
      </div>
      <div style={{ display: "flex", gap: "8px" }}>
        <Button variant="primary" size="sm">
          Connect
        </Button>
        <Button variant="secondary" size="sm">
          Message
        </Button>
      </div>
    </Card>
  ),
};
