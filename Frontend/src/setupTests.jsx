import "@testing-library/jest-dom";
import { vi } from "vitest";

Object.defineProperty(global.window, "localStorage", {
  value: {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  },
  writable: true,
});

vi.mock("@auth0/auth0-react", () => ({
  useAuth0: () => ({
    isAuthenticated: true,
    user: { email: "test@example.com", name: "Test User" },
    getAccessTokenSilently: vi.fn(),
  }),
}));
