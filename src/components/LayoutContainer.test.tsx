import userEvent from "@testing-library/user-event";
import React from "react";
import { render } from "../../test/test-utils";
import LayoutContainer from "./LayoutContainer";
it("can browse to the about page", async () => {
  // For `LayoutContainer`, you should be able to render the layout container, followed by navigating to the About page.

  const { queryByTestId, history } = render(<LayoutContainer />);
  const layoutEl = queryByTestId("layout");
  expect(layoutEl).toBeTruthy(); //parent exists
  const childEl = queryByTestId("routes");
  expect(childEl).toBeTruthy(); //child exists
  const linkEl = queryByTestId("link");
  expect(history.location.pathname).toBe("/");
  userEvent.click(linkEl);
  expect(history.location.pathname).toBe("/about");
});
