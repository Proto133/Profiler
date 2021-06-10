const Employee = require('./Employee')

function Intern(profilePicture, role, name, id, email, school) {
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
    this.school = school;
}
Intern.prototype = Object.create(Employee.prototype);
Intern.prototype.constructor = Intern;

module.exports = Intern;