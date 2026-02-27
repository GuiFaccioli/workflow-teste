import apiClient from "@/services/apiClient";

describe("apiClient", () => {
  it("should be an axios instance with the correct baseURL", () => {
    const baseURL =
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";
    expect(apiClient.defaults.baseURL).toBe(baseURL);
  });

  it("should have Content-Type header set to application/json", () => {
    expect(apiClient.defaults.headers["Content-Type"]).toBe(
      "application/json",
    );
  });
});
