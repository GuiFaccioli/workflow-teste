/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HeroSection from "@/components/HeroSection";

describe("HeroSection component", () => {
  it("should render a section element", () => {
    render(<HeroSection />);
    expect(screen.getByRole("region")).toBeInTheDocument();
  });

  it("should use the default alt text as aria-label", () => {
    render(<HeroSection />);
    expect(screen.getByRole("region", { name: "Hero background" })).toBeInTheDocument();
  });

  it("should use a custom altText as aria-label", () => {
    render(<HeroSection altText="Custom hero" />);
    expect(screen.getByRole("region", { name: "Custom hero" })).toBeInTheDocument();
  });

  it("should apply background image style with the provided imageUrl", () => {
    const url = "https://example.com/image.jpg";
    render(<HeroSection imageUrl={url} />);
    const section = screen.getByRole("region");
    expect(section).toHaveStyle({ backgroundImage: `url(${url})` });
  });

  it("should apply a default background image when no imageUrl is provided", () => {
    render(<HeroSection />);
    const section = screen.getByRole("region");
    expect(section.style.backgroundImage).toContain("picsum.photos");
  });
});
