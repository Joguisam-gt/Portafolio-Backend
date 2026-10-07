export class IEmailRepository {
  async sendEmail(contactMessage) {
    throw new Error("El método 'sendEmail' debe ser implementado por un adaptador.");
  }
}