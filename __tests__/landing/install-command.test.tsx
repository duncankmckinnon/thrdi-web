import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InstallCommand } from "@/components/landing/install-command";

const BREW = "brew install duncankmckinnon/tap/thirdeye";
const PIP = "pip install 'thrdi[ui,logfire]'";
const UV = "uv tool install 'thrdi[ui,logfire]'";

describe("InstallCommand", () => {
  it("offers brew, pip, and uv", () => {
    render(<InstallCommand />);
    expect(screen.getAllByRole("tab").map((t) => t.textContent)).toEqual([
      "brew",
      "pip",
      "uv",
    ]);
  });

  it("defaults to the brew command", () => {
    render(<InstallCommand />);
    expect(screen.getByText(BREW)).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "brew" })).toHaveAttribute(
      "aria-selected",
      "true"
    );
  });

  it("swaps the command when another method is selected", async () => {
    const user = userEvent.setup();
    render(<InstallCommand />);

    await user.click(screen.getByRole("tab", { name: "pip" }));
    expect(screen.getByText(PIP)).toBeInTheDocument();
    expect(screen.queryByText(BREW)).not.toBeInTheDocument();

    await user.click(screen.getByRole("tab", { name: "uv" }));
    expect(screen.getByText(UV)).toBeInTheDocument();
    expect(screen.queryByText(PIP)).not.toBeInTheDocument();
  });

  it("moves aria-selected to the active tab", async () => {
    const user = userEvent.setup();
    render(<InstallCommand />);

    await user.click(screen.getByRole("tab", { name: "uv" }));

    expect(screen.getByRole("tab", { name: "uv" })).toHaveAttribute(
      "aria-selected",
      "true"
    );
    expect(screen.getByRole("tab", { name: "brew" })).toHaveAttribute(
      "aria-selected",
      "false"
    );
  });

  it("copies the currently selected command", async () => {
    const user = userEvent.setup();
    render(<InstallCommand />);

    await user.click(screen.getByRole("tab", { name: "pip" }));
    await user.click(screen.getByLabelText("Copy to clipboard"));

    // userEvent.setup() installs a clipboard stub we can read back.
    await expect(navigator.clipboard.readText()).resolves.toBe(PIP);
  });

  it("applies the requested size to the command box", () => {
    const { container } = render(<InstallCommand size="lg" />);
    expect(container.querySelector(".text-lg")).toBeInTheDocument();
  });
});
