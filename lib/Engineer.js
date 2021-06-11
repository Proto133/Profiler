const Employee = require('./Employee')

function Engineer(profilePicture, name, id, email, github) {
    Employee.call(this, profilePicture, name, id, email);
    this.github = github;
}

Engineer.prototype = Object.create(Employee.prototype);
Engineer.prototype.constructor = Engineer;

Engineer.prototype.getRole = function() {
    return "Engineer";
}

Engineer.prototype.getGithub = function() {
    return this.github;
}


module.exports = Engineer;