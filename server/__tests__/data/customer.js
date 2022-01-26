it('customer data', () => {});

const customerCorrect = {
  login: 'strawberry',
  password: 'qwerty123',
  name: 'Vladik',
  surname: 'Lavandos',
  phone: '+380992997523',
  email: 'lavandos@gmail.com'
};

const customerLoginAbsence = {
  password: 'qwerty123',
  name: 'Vladik',
  surname: 'Lavandos',
  phone: '+380992997523',
  email: 'lavandos@gmail.com'
};

module.exports = {
  customerCorrect,
  customerLoginAbsence
};
