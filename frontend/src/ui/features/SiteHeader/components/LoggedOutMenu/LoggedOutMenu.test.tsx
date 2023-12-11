import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoggedOutMenu from "./LoggedOutMenu";

test("loads and displays LoggedOutMenu component", async () => {
  render(<LoggedOutMenu />);
  expect(screen.getByTestId("loggedOutMenu")).toBeTruthy();
});
