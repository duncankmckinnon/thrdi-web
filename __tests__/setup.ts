import "@testing-library/jest-dom/vitest";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// vitest runs without `globals: true`, so testing-library cannot register its
// own auto-cleanup. Without this, rendered trees leak between tests.
afterEach(cleanup);
