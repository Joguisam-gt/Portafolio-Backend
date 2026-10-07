export class ContactController {
  constructor(sendContactEmailUseCase) {
    this.sendContactEmailUseCase = sendContactEmailUseCase;
  }

  handle = async (req, res) => {
    try {
      const result = await this.sendContactEmailUseCase.execute(req.body);
      return res.status(200).json({
        status: "success",
        message: "¡Mensaje transmitido con éxito!",
        data: result
      });
    } catch (error) {
      return res.status(400).json({
        status: "error",
        message: error.message
      });
    }
  }
}