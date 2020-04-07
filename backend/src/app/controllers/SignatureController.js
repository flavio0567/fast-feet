import SignatureService from '../services/SignatureService';

class SignatureController {
  async store(req, res) {
    const { id } = req.params;

    const { originalname: name, filename: path } = req.file;

    const signatureService = await SignatureService.run({
      name,
      path,
    })

    if (signatureService.error) {
      return res.status(400).json(signatureService);
    }

    return res.json(signatureService);
  }
}

export default new SignatureController();
