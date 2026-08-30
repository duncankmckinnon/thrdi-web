import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { HowItWorks } from "@/components/landing/how-it-works";

describe("HowItWorks", () => {
  it("uses the interactive setup command to wire up thirdeye", () => {
    render(<HowItWorks />);

    expect(screen.getByRole("heading", { name: "Wire it up" })).toBeInTheDocument();
    expect(screen.getByText("thirdeye setup")).toBeInTheDocument();
  });
});
