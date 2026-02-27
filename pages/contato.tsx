import { useState } from "react";
import Head from "next/head";
import { z } from "zod";
import styles from "@/styles/Contato.module.css";

export const contatoSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  mensagem: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

export type ContatoFormData = z.infer<typeof contatoSchema>;

type FormErrors = Partial<Record<keyof ContatoFormData, string>>;

export default function Contato() {
  const [formData, setFormData] = useState<ContatoFormData>({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContatoFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = contatoSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContatoFormData;
        fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setFormData({ nome: "", email: "", mensagem: "" });
  }

  return (
    <>
      <Head>
        <title>Contato</title>
        <meta name="description" content="Entre em contato conosco" />
      </Head>
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>Contato</h1>
          <p className={styles.subtitle}>
            Preencha o formulário abaixo e entraremos em contato em breve.
          </p>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label htmlFor="nome" className={styles.label}>
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Seu nome completo"
                value={formData.nome}
                onChange={handleChange}
                className={`${styles.input} ${errors.nome ? styles.inputError : ""}`}
                aria-describedby={errors.nome ? "nome-error" : undefined}
              />
              {errors.nome && (
                <span id="nome-error" className={styles.errorMessage}>
                  {errors.nome}
                </span>
              )}
            </div>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
                className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <span id="email-error" className={styles.errorMessage}>
                  {errors.email}
                </span>
              )}
            </div>
            <div className={styles.field}>
              <label htmlFor="mensagem" className={styles.label}>
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Escreva sua mensagem aqui..."
                value={formData.mensagem}
                onChange={handleChange}
                className={`${styles.textarea} ${errors.mensagem ? styles.textareaError : ""}`}
                aria-describedby={
                  errors.mensagem ? "mensagem-error" : undefined
                }
              />
              {errors.mensagem && (
                <span id="mensagem-error" className={styles.errorMessage}>
                  {errors.mensagem}
                </span>
              )}
            </div>
            <button type="submit" className={styles.submitButton}>
              Enviar mensagem
            </button>
          </form>
          {submitted && (
            <p className={styles.successMessage}>
              ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
            </p>
          )}
        </div>
      </main>
    </>
  );
}
