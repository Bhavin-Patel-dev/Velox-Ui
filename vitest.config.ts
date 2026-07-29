import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/setupTests.ts"],
    typecheck: {
      tsconfig: "./tsconfig.test.json",
    },
    exclude: ["**/node_modules/**", "**/dist/**", "**/*.stories.tsx"],
  },
});
