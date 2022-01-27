const correct1 = {
  login: 'strawberry',
  password: 'qwerty123',
  name: 'Vladik',
  surname: 'Lavandos',
  phone: '+380992997523',
  email: 'lavandos@gmail.com'
};

const correct2 = {
  login: 'blueberry',
  password: 'asdfgh123',
  name: 'Denys',
  surname: 'Zachar',
  phone: '+380663453423',
  email: 'zachar@gmail.com'
};

const correct3 = {
  login: 'apple',
  password: 'zxcvb321',
  name: 'Augusto',
  surname: 'Alexus',
  phone: '+380991237645',
  email: 'augusto@gmail.com'
};

const loginAbsence = {
  password: 'qwerty123',
  name: 'Vladik',
  surname: 'Lavandos',
  phone: '+380992997523',
  email: 'lavandos@gmail.com'
};

const passwordAbsence = {
  login: 'strawberry',
  name: 'Vladik',
  surname: 'Lavandos',
  phone: '+380992997523',
  email: 'lavandos@gmail.com'
};

const nameAbsence = {
  login: 'strawberry',
  password: 'qwerty123',
  surname: 'Lavandos',
  phone: '+380992997523',
  email: 'lavandos@gmail.com'
};

const surnameAbsence = {
  login: 'strawberry',
  password: 'qwerty123',
  name: 'Vladik',
  phone: '+380992997523',
  email: 'lavandos@gmail.com'
};

const phoneAbsence = {
  login: 'strawberry',
  password: 'qwerty123',
  name: 'Vladik',
  surname: 'Lavandos',
  email: 'lavandos@gmail.com'
};

const emailAbsence = {
  login: 'strawberry',
  password: 'qwerty123',
  name: 'Vladik',
  surname: 'Lavandos',
  phone: '+380992997523'
};

const customerWithSuchLoginExists = {
  login: 'strawberry',
  password: 'qwerty123',
  name: 'Vladik',
  surname: 'Lavandos',
  phone: '+380662997523',
  email: 'august@gmail.com'
};

const customerWithSuchPhoneExists = {
  login: 'blueberry',
  password: 'qwerty123',
  name: 'Vladik',
  surname: 'Lavandos',
  phone: '+380992997523',
  email: 'august@gmail.com'
};

const customerWithSuchEmailExists = {
  login: 'blueberry',
  password: 'qwerty123',
  name: 'Vladik',
  surname: 'Lavandos',
  phone: '+380662997523',
  email: 'lavandos@gmail.com'
};

const loginCorrect = {
  login: 'strawberry',
  password: 'qwerty123'
};

module.exports = {
  correct1,
  correct2,
  correct3,
  loginAbsence,
  passwordAbsence,
  nameAbsence,
  surnameAbsence,
  phoneAbsence,
  emailAbsence,
  customerWithSuchLoginExists,
  customerWithSuchPhoneExists,
  customerWithSuchEmailExists,
  loginCorrect
};
