export class ContactMessage {
  constructor({ name, email, subject, message }) {
    if (!name || !email || !message) {
      throw new Error("Todos los campos obligatorios (nombre, email, mensaje) son requeridos.");
    }
    if (!email.includes("@") || !email.includes(".")) {
      throw new Error("El formato del correo electrónico no es válido.");
    }
    this.name = name;
    this.email = email;
    this.subject = subject || "Mensaje desde el Portafolio Profesional";
    this.message = message;
    this.createdAt = new Date();
  }
}