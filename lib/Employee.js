const Employee = function(profilePicture, name, id, email) {
    this.profilePicture = profilePicture;
    this.name = name;
    this.id = id;
    this.email = email;
}

module.exports = Employee;