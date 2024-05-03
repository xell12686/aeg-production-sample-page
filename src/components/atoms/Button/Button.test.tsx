import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from ".";
jest.mock(
  "next/link",
  () =>
    ({ children }) =>
      children,
);

describe("Button", () => {
  test("renders a button element when href is not provided", () => {
    render(<Button label="Click me" onClick={() => {}} />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe("BUTTON");
  });

  test("button calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders an anchor element wrapped by Link when href is provided", () => {
    render(<Button href="https://example.com" label="Go to example" />);
    const linkElement = screen.getByRole("link", { name: /go to example/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.tagName).toBe("A");
    expect(linkElement).toHaveAttribute("href", "https://example.com");
  });

  test("anchor does not call onClick handler when clicked with href", () => {
    const handleClick = jest.fn();
    render(
      <Button
        href="https://example.com"
        label="Go to example"
        onClick={handleClick}
      />,
    );
    const linkElement = screen.getByRole("link", { name: /go to example/i });
    fireEvent.click(linkElement);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test("renders with default label when none is provided", () => {
    render(<Button onClick={() => {}} />);
    const buttonElement = screen.getByRole("button", { name: /read more/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
