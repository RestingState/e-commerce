module.exports = class DeliveryAdressDto {
    id;
 
    constructor(model) {
        this.id = model._id;
    }
};