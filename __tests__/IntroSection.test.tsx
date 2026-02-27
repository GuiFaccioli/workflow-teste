/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import IntroSection from "@/components/IntroSection";

const defaultProps = {
  title: "Produto Alpha",
  description: "Uma descrição de produto.",
  imageUrl: "https://picsum.photos/seed/alpha/480/320",
  imageAlt: "Produto Alpha",
};

describe("IntroSection component", () => {
  it("should render the title", () => {
    render(<IntroSection {...defaultProps} />);
    expect(screen.getByRole("heading", { name: "Produto Alpha" })).toBeInTheDocument();
  });

  it("should render the description", () => {
    render(<IntroSection {...defaultProps} />);
    expect(screen.getByText("Uma descrição de produto.")).toBeInTheDocument();
  });

  it("should render the image with correct alt text", () => {
    render(<IntroSection {...defaultProps} />);
    expect(screen.getByAltText("Produto Alpha")).toBeInTheDocument();
  });

  it("should not set data-reverse when reverse prop is false", () => {
    const { container } = render(<IntroSection {...defaultProps} />);
    const section = container.querySelector("section");
    expect(section).not.toHaveAttribute("data-reverse");
  });

  it("should set data-reverse when reverse prop is true", () => {
    const { container } = render(<IntroSection {...defaultProps} reverse />);
    const section = container.querySelector("section");
    expect(section).toHaveAttribute("data-reverse", "true");
  });
});
