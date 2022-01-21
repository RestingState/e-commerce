module.exports = class OrderReceiverDto {
  id;

  constructor(model) {
    this.id = model._id;
    this.customerID = model.customerID;
    this.name = model.name;
    this.surname = model.surname;
    this.phone = model.phone;
  }
};
