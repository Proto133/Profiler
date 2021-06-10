const Employee = require('./Employee')

function Manager(profilePicture, role, name, id, email, officeNumber) {
    Employee.call(this);
    if (profilePicture) {
        this.profilePicture = profilePicture
    } else {
        this.profilePicture = 'https://icedrive.net/0/aaZPbVxMPC'
    };
    this.role = role;
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

module.exports = Manager;