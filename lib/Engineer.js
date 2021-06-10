const Employee = require('./Employee')

function Engineer(profilePicture, role, name, id, email, github) {
    Employee.call(this);
    if (profilePicture) {
        this.profilePicture = profilePicture
    } else {
        this.profilePicture = 'https://picsum.photos/200'
    };
    this.role = role;
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
}
Engineer.prototype = Object.create(Employee.prototype);
Engineer.prototype.constructor = Engineer;

module.exports = Engineer;