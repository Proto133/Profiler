const Employee = require('./Employee')

function Engineer(profilePicture, role, name, id, email, github) {
    Employee.call(this);
    this.profilePicture = profilePicture;
    this.role = role;
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
}
Engineer.prototype = Object.create(Employee.prototype);
Engineer.prototype.constructor = Engineer;

module.exports = Engineer;