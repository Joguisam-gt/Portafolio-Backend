import { Router } from 'express';

export function createContactRouter(contactController) {
  const router = Router();
  router.post('/contact', contactController.handle);
  return router;
}