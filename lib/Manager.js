const Employee = require('./Employee')

function Manager(profilePicture, name, id, email, officeNumber) {
    Employee.call(this);
    this.profilePicture = profilePicture;
    this.role = role;
    this.name = name;
    this.id = id;
    this.email = email;
    this.officNumber = officeNumber;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

module.exports = Manager;