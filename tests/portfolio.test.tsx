import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";

beforeEach(() => {
  localStorage.clear();
  document.documentElement.classList.remove("dark");
  globalThis.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }));
});
afterEach(cleanup);

describe("portfolio visitor journeys", () => {
  it("opens each project with its correct engineering details and source link", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole("button", { name: "Explore Patchwork" }));
    expect(screen.getByRole("dialog").textContent).toContain(
      "124 backend tests and 16 frontend tests",
    );
    expect(
      screen.getByRole("link", { name: /View source/ }).getAttribute("href"),
    ).toBe("https://github.com/abishekp123/patchwork-ai");
    await user.keyboard("{Escape}");
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
    await user.click(screen.getByRole("button", { name: "Explore EmberKV" }));
    expect(screen.getByRole("dialog").textContent).toContain(
      "8.4× faster queries",
    );
    expect(
      screen.getByRole("link", { name: /View source/ }).getAttribute("href"),
    ).toBe("https://github.com/abishekp123/emberkv");
  });
  it("expands work experience and preserves the theme preference", async () => {
    const user = userEvent.setup();
    const view = render(<App />);
    const job = screen.getByRole("button", {
      name: /Scotiabank.*Software Engineering Intern/,
    });
    await user.click(job);
    expect(job.getAttribute("aria-expanded")).toBe("true");
    expect(
      screen.getByText(/Built a Node.js audit application/).textContent,
    ).toContain("30,000+");
    await user.click(
      screen.getByRole("button", { name: "Switch to dark theme" }),
    );
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("portfolio-theme")).toBe("dark");
    view.unmount();
    render(<App />);
    expect(
      screen.getByRole("button", { name: "Switch to light theme" }),
    ).toBeTruthy();
  });
  it("provides a complete printable résumé", async () => {
    const user = userEvent.setup();
    const print = vi.spyOn(window, "print").mockImplementation(() => {});
    render(<App />);
    await user.click(screen.getByRole("button", { name: "Résumé" }));
    expect(screen.getByRole("dialog").textContent).toContain(
      "CaseHacks finalist",
    );
    expect(screen.getByRole("dialog").textContent).toContain("647-916-7433");
    await user.click(
      screen.getByRole("button", { name: "Print / save as PDF" }),
    );
    expect(print).toHaveBeenCalledOnce();
    print.mockRestore();
  });
  it("copies the contact email and offers a working mail link", async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(
      screen.getByRole("link", { name: "Say hello" }).getAttribute("href"),
    ).toBe("mailto:a6prabah@uwaterloo.ca");
    await user.click(
      screen.getByRole("button", { name: "Copy email address" }),
    );
    expect(await navigator.clipboard.readText()).toBe("a6prabah@uwaterloo.ca");
    expect(screen.getByRole("status").textContent).toContain(
      "Email address copied",
    );
  });
});
