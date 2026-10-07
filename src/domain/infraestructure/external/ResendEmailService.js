import { IEmailRepository } from '../../domain/repositories/IEmailRepository.js';
import { Resend } from 'resend';

export class ResendEmailService extends IEmailRepository {
  constructor(apiKey) {
    super();
    this.resend = new Resend(apiKey);
  }

  async sendEmail(contactMessage) {
    try {
      const response = await this.resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>',
        to: process.env.RECEIVER_EMAIL || 'evomarketgt@icloud.com',
        subject: `[Portafolio] ${contactMessage.subject} - De: ${contactMessage.name}`,
        html: `
          <h3>Nuevo mensaje de contacto</h3>
          <p><strong>Nombre:</strong> ${contactMessage.name}</p>
          <p><strong>Correo:</strong> ${contactMessage.email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${contactMessage.message}</p>
        `
      });
      return { success: true, data: response };
    } catch (error) {
      throw new Error(`Error al enviar el correo mediante el servicio externo: ${error.message}`);
    }
  }
}