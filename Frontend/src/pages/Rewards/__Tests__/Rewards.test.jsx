import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import Rewards from "../Rewards";

vi.mock("@auth0/auth0-react", () => ({
  useAuth0: () => ({
    isAuthenticated: true,
    user: { email: "test@example.com", name: "Test User" },
    getAccessTokenSilently: vi.fn(),
  }),
}));

describe("Rewards Component", () => {
  it("renders without crashing and displays rewards info when authenticated", () => {
    render(<Rewards />);
    expect(screen.getByText("Rewards")).toBeInTheDocument();
    expect(screen.getByText("Your Points:")).toBeInTheDocument();
  });

  it("renders the login message when not authenticated", () => {
    vi.mock("@auth0/auth0-react", () => ({
      useAuth0: () => ({
        isAuthenticated: false,
      }),
    }));

    render(<Rewards />);
    expect(screen.getByText("Please log in.")).toBeInTheDocument();
  });
});
