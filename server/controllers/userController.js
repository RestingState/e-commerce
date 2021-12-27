class UserController {
  async registration(req, res) {
    return res.json({ registration: 'successful' });
  }
}

module.exports = new UserController();
