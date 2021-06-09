const Employee = require('./Employee')

function Intern(profilePicture, role, name, id, email, school) {
    Employee.call(this);
    this.profilePicture = profilePicture;
    this.role = role;
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
}
Intern.prototype = Object.create(Employee.prototype);
Intern.prototype.constructor = Intern;

module.exports = Intern;