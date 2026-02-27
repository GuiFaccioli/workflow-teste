import { contatoSchema } from "@/pages/contato";

describe("contatoSchema", () => {
  it("accepts valid form data", () => {
    const result = contatoSchema.safeParse({
      nome: "João Silva",
      email: "joao@exemplo.com",
      mensagem: "Olá, gostaria de mais informações.",
    });
    expect(result.success).toBe(true);
  });

  it("rejects an empty nome", () => {
    const result = contatoSchema.safeParse({
      nome: "",
      email: "joao@exemplo.com",
      mensagem: "Olá, gostaria de mais informações.",
    });
    expect(result.success).toBe(false);
  });

  it("rejects a nome that is too short", () => {
    const result = contatoSchema.safeParse({
      nome: "A",
      email: "joao@exemplo.com",
      mensagem: "Olá, gostaria de mais informações.",
    });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid email", () => {
    const result = contatoSchema.safeParse({
      nome: "João Silva",
      email: "not-an-email",
      mensagem: "Olá, gostaria de mais informações.",
    });
    expect(result.success).toBe(false);
  });

  it("rejects a mensagem that is too short", () => {
    const result = contatoSchema.safeParse({
      nome: "João Silva",
      email: "joao@exemplo.com",
      mensagem: "Curta",
    });
    expect(result.success).toBe(false);
  });
});
