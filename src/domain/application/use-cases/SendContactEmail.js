import { ContactMessage } from '../../domain/entities/ContactMessage.js';

export class SendContactEmail {
  constructor(emailRepository) {
    this.emailRepository = emailRepository;
  }

  async execute(data) {
    const contactMessage = new ContactMessage(data);
    return await this.emailRepository.sendEmail(contactMessage);
  }
}