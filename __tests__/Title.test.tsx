import Title from "@/components/ui/Title";

describe("Title component", () => {
  it("should export a default function", () => {
    expect(typeof Title).toBe("function");
  });

  it("should have the correct function name", () => {
    expect(Title.name).toBe("Title");
  });
});
