/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "@/components/Button";

describe("Button component", () => {
  describe("Basic rendering", () => {
    it("should render the button with the provided label", () => {
      render(<Button label="Click me" />);
      expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
    });

    it("should render with default variant 'primary'", () => {
      render(<Button label="Primary" />);
      const button = screen.getByRole("button", { name: "Primary" });
      expect(button).toHaveAttribute("data-variant", "primary");
    });

    it("should render with variant 'secondary'", () => {
      render(<Button label="Secondary" variant="secondary" />);
      const button = screen.getByRole("button", { name: "Secondary" });
      expect(button).toHaveAttribute("data-variant", "secondary");
    });

    it("should render with type='button'", () => {
      render(<Button label="Test" />);
      expect(screen.getByRole("button", { name: "Test" })).toHaveAttribute("type", "button");
    });

    it("should apply a custom className", () => {
      render(<Button label="Styled" className="my-class" />);
      expect(screen.getByRole("button", { name: "Styled" })).toHaveClass("my-class");
    });
  });

  describe("onClick event", () => {
    it("should call onClick when the button is clicked", () => {
      const handleClick = jest.fn();
      render(<Button label="Click" onClick={handleClick} />);
      fireEvent.click(screen.getByRole("button", { name: "Click" }));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("should pass the mouse event to the onClick handler", () => {
      const handleClick = jest.fn();
      render(<Button label="Click" onClick={handleClick} />);
      fireEvent.click(screen.getByRole("button", { name: "Click" }));
      expect(handleClick).toHaveBeenCalledWith(expect.objectContaining({ type: "click" }));
    });
  });

  describe("disabled prop", () => {
    it("should be disabled when disabled prop is true", () => {
      render(<Button label="Disabled" disabled />);
      expect(screen.getByRole("button", { name: "Disabled" })).toBeDisabled();
    });

    it("should not call onClick when the button is disabled", () => {
      const handleClick = jest.fn();
      render(<Button label="Disabled" disabled onClick={handleClick} />);
      fireEvent.click(screen.getByRole("button", { name: "Disabled" }));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it("should be enabled by default", () => {
      render(<Button label="Enabled" />);
      expect(screen.getByRole("button", { name: "Enabled" })).toBeEnabled();
    });
  });

  describe("Accessibility (ARIA)", () => {
    it("should have an implicit role of 'button'", () => {
      render(<Button label="Accessible" />);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("should use the label as aria-label by default", () => {
      render(<Button label="Submit" />);
      expect(screen.getByRole("button", { name: "Submit" })).toHaveAttribute("aria-label", "Submit");
    });

    it("should use a custom ariaLabel when provided", () => {
      render(<Button label="Submit" ariaLabel="Submit the form" />);
      expect(screen.getByRole("button", { name: "Submit the form" })).toHaveAttribute("aria-label", "Submit the form");
    });
  });
});
