describe('example', () => {
  it('should pass a basic sanity check', () => {
    expect(1 + 1).toBe(2);
  });

  it('should handle string operations', () => {
    const greeting = 'Hello, World!';
    expect(greeting).toContain('Hello');
    expect(greeting.length).toBeGreaterThan(0);
  });
});
