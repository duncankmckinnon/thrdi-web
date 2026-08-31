import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { CtaFooter } from "@/components/landing/cta-footer";

describe("CtaFooter", () => {
  it("offers Logfire sync, Workbench, and the local UI", () => {
    render(<CtaFooter />);

    expect(screen.getByRole("heading", { name: "Sync to Logfire" })).toBeInTheDocument();
    expect(screen.getByText("thirdeye logfire enable")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Pair with workbench" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Open Thirdeye UI" })).toBeInTheDocument();
    expect(screen.getByText("thirdeye ui")).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Preview of the thirdeye sessions list page" })
    ).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Try thirdeye" })).not.toBeInTheDocument();
  });
});
