const Employee = require('./Employee')

function Manager(profilePicture, role, name, id, email, officeNumber) {
    Employee.call(this);
    this.profilePicture = profilePicture;
    this.role = role;
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

module.exports = Manager;