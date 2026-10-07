import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { ResendEmailService } from './src/infrastructure/external/ResendEmailService.js';
import { SendContactEmail } from './src/application/use-cases/SendContactEmail.js';
import { ContactController } from './src/infrastructure/http/controllers/ContactController.js';
import { createContactRouter } from './src/infrastructure/http/routes/contact.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Inyección de Dependencias manual
const emailService = new ResendEmailService(process.env.RESEND_API_KEY);
const sendContactEmailUseCase = new SendContactEmail(emailService);
const contactController = new ContactController(sendContactEmailUseCase);

app.use('/api', createContactRouter(contactController));

app.get('/', (req, res) => {
  res.status(200).json({ status: "API Online", architecture: "Clean Architecture + SOLID" });
});

app.listen(PORT, () => {
  console.log(`> Servidor ejecutándose en puerto ${PORT}`);
});