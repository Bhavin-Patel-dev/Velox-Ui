# velox-ui

A lightweight, production-grade React component library built with TypeScript, Vite, and Vitest - documented with Storybook and published to npm.

---

## Features

- **5 production-ready components** - Button, Input, Badge, Card, Spinner

- **Fully typed** - complete TypeScript support with exported prop types

- **Dual format** - ships both ESM and CommonJS builds

- **Accessible** - ARIA roles, keyboard navigation, screen reader support baked in

- **Tested** - 44 unit tests with 95%+ branch coverage via Vitest

- **Documented** - full Storybook documentation with live controls and autodocs

- **Zero dependencies** - only React as a peer dependency

---

## Installation

```bash
# Install from npm
npm install @bhavin-patel/velox-ui
```

### Import the CSS

The Spinner component requires a CSS import for its animation. Add this to your app's entry point:

```ts
import "@bhavin-patel/velox-ui/dist/velox-ui.css";
```

---

## Usage

### Button

```tsx
import { Button } from '@bhavin-patel/velox-ui'

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// States
<Button isLoading>Loading</Button>
<Button disabled>Disabled</Button>

// With onClick
<Button onClick={() => console.log('clicked')}>Click me</Button>

// With ref
const ref = useRef<HTMLButtonElement>(null)
<Button ref={ref}>With Ref</Button>
```

### Input

```tsx
import { Input } from '@bhavin-patel/velox-ui'

// Basic
<Input placeholder="Enter text..." />

// With label
<Input label="Email" placeholder="Enter your email" />

// With helper text
<Input
  label="Password"
  placeholder="Min 8 characters"
  helperText="Must contain uppercase and number"
/>

// With error
<Input
  label="Email"
  placeholder="Enter your email"
  errorText="Email is required"
/>

// Full width
<Input label="Full Name" isFullWidth />

// With ref
const ref = useRef<HTMLInputElement>(null)
<Input ref={ref} label="Username" />
```

### Badge

```tsx
import { Badge } from '@bhavin-patel/velox-ui'

// Variants
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Failed</Badge>
<Badge variant="info">New</Badge>
<Badge variant="neutral">Draft</Badge>

// Sizes
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
```

### Card

```tsx
import { Card } from '@bhavin-patel/velox-ui'

// Variants
<Card variant="elevated">Elevated card</Card>
<Card variant="outlined">Outlined card</Card>
<Card variant="filled">Filled card</Card>

// Clickable
<Card onClick={() => console.log('clicked')}>
  Clickable card — keyboard accessible
</Card>

// Without padding
<Card isPadded={false}>
  <img src="..." alt="..." style={{ width: '100%' }} />
</Card>

// Composed
<Card variant="outlined" style={{ width: '320px' }}>
  <h3>Pro Plan</h3>
  <p>Everything you need to scale.</p>
  <Button variant="primary">Get Started</Button>
</Card>
```

### Spinner

```tsx
import { Spinner } from '@bhavin-patel/velox-ui'

// Basic
<Spinner />

// Sizes
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />

// Variants
<Spinner variant="primary" />
<Spinner variant="secondary" />

// White variant — use on dark backgrounds only
<div style={{ backgroundColor: '#1e293b', padding: '16px' }}>
  <Spinner variant="white" />
</div>

// Custom accessible label
<Spinner label="Fetching user data..." />

// Inside a button
<Button variant="primary" disabled>
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Spinner size="sm" variant="white" />
    Saving...
  </div>
</Button>
```

---

## Props

### Button

| Prop        | Type                                  | Default     | Description         |
| ----------- | ------------------------------------- | ----------- | ------------------- |
| `variant`   | `'primary' \| 'secondary' \| 'ghost'` | `'primary'` | Visual style        |
| `size`      | `'sm' \| 'md' \| 'lg'`                | `'md'`      | Size of the button  |
| `isLoading` | `boolean`                             | `false`     | Shows loading state |
| `disabled`  | `boolean`                             | `false`     | Disables the button |
| `children`  | `ReactNode`                           | —           | Button content      |
| `ref`       | `Ref<HTMLButtonElement>`              | —           | Forwarded ref       |

Also accepts all native `<button>` HTML attributes.

---

### Input

| Prop          | Type                    | Default | Description                                    |
| ------------- | ----------------------- | ------- | ---------------------------------------------- |
| `label`       | `string`                | —       | Label above the input                          |
| `helperText`  | `string`                | —       | Helper text below the input                    |
| `errorText`   | `string`                | —       | Error message — takes priority over helperText |
| `size`        | `'sm' \| 'md' \| 'lg'`  | `'md'`  | Size of the input                              |
| `isFullWidth` | `boolean`               | `false` | Stretches to full container width              |
| `disabled`    | `boolean`               | `false` | Disables the input                             |
| `ref`         | `Ref<HTMLInputElement>` | —       | Forwarded ref                                  |

Also accepts all native `<input>` HTML attributes except `size`.

---

### Badge

| Prop       | Type                                                       | Default     | Description       |
| ---------- | ---------------------------------------------------------- | ----------- | ----------------- |
| `variant`  | `'success' \| 'warning' \| 'error' \| 'info' \| 'neutral'` | `'neutral'` | Visual style      |
| `size`     | `'sm' \| 'md' \| 'lg'`                                     | `'md'`      | Size of the badge |
| `children` | `ReactNode`                                                | —           | Badge content     |

---

### Card

| Prop          | Type                                   | Default      | Description                                  |
| ------------- | -------------------------------------- | ------------ | -------------------------------------------- |
| `variant`     | `'elevated' \| 'outlined' \| 'filled'` | `'elevated'` | Visual style                                 |
| `onClick`     | `MouseEventHandler`                    | —            | Makes card clickable and keyboard accessible |
| `isHoverable` | `boolean`                              | `false`      | Adds hover transition                        |
| `isPadded`    | `boolean`                              | `true`       | Controls internal padding                    |
| `children`    | `ReactNode`                            | —            | Card content                                 |

---

### Spinner

| Prop      | Type                                  | Default        | Description                                         |
| --------- | ------------------------------------- | -------------- | --------------------------------------------------- |
| `size`    | `'sm' \| 'md' \| 'lg'`                | `'md'`         | Size of the spinner                                 |
| `variant` | `'primary' \| 'secondary' \| 'white'` | `'primary'`    | Color variant. Use `white` on dark backgrounds only |
| `label`   | `string`                              | `'Loading...'` | Accessible label for screen readers                 |

---

## Project Structure

```
velox-ui/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   ├── Input/
│   │   │   ├── Input.tsx
│   │   │   ├── Input.test.tsx
│   │   │   ├── Input.stories.tsx
│   │   │   └── index.ts
│   │   ├── Badge/
│   │   │   ├── Badge.tsx
│   │   │   ├── Badge.test.tsx
│   │   │   ├── Badge.stories.tsx
│   │   │   └── index.ts
│   │   ├── Card/
│   │   │   ├── Card.tsx
│   │   │   ├── Card.test.tsx
│   │   │   ├── Card.stories.tsx
│   │   │   └── index.ts
│   │   ├── Spinner/
│   │   │   ├── Spinner.tsx
│   │   │   ├── Spinner.css
│   │   │   ├── Spinner.test.tsx
│   │   │   ├── Spinner.stories.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── declarations.d.ts
│   ├── setupTests.ts
│   └── index.ts
├── .storybook/
│   ├── main.ts
│   └── preview.tsx
├── dist/                  ← generated on build
├── .npmignore
├── .gitignore
├── package.json
├── tsconfig.json
├── tsconfig.test.json
├── vite.config.ts
└── vitest.config.ts
```

---

## Local Development

### Clone the repo

```bash
# Install from github
git clone https://github.com/Bhavin-Patel-dev/Velox-Ui

cd Velox-Ui

npm install
```

### Run Storybook

```bash
npm run storybook
```

Opens at `http://localhost:6006` — live component playground with controls and documentation.

### Run tests

```bash
npm test
```

### Run tests with coverage

```bash
npm run test:coverage
```

### Build the library

```bash
npm run build
```

Outputs to `dist/` — ESM, CJS, type declarations, and CSS.

---

## Tech Stack

| Tool            | Purpose                     |
| --------------- | --------------------------- |
| React           | UI library                  |
| TypeScript      | Type safety                 |
| Vite            | Build tool — library mode   |
| Vitest          | Unit testing                |
| Testing Library | Component testing utilities |
| Storybook       | Component documentation     |
| vite-plugin-dts | Type declaration generation |

---

## Contributing

1. Fork the repo
2. Create a feature branch — `git checkout -b feat/your-component`
3. Add your component with tests and stories
4. Run `npm test` — all tests must pass
5. Open a pull request
