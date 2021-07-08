import React from "react";
import userEvent from "@testing-library/user-event";
import { render } from "../../test/test-utils";

import About from "./About";

it("renders <About /> page", () => {
  // You should be able to verify the About page rendered correctly.
  const { queryByTestId } = render(<About />);
  expect(queryByTestId("about")).toBeTruthy();
});

it("clicks button and fires increment counter", () => {
  // You should be able to click the increment button and verify the count.
  const { queryByTestId } = render(<About />);
  const btnEl = queryByTestId("btn");
  const counterEl = queryByTestId("counter");
  for (let i = 0; i < 50; i++) {
    expect(counterEl.textContent).toBe(`Current Count: ${i}`);
    userEvent.click(btnEl);
    expect(counterEl.textContent).toBe(`Current Count: ${i + 1}`);
  }
});
