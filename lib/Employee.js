const Employee = function(profilePicture, name, id, email) {
    if (profilePicture) {
        this.profilePicture = profilePicture
    } else {
        this.profilePicture = 'https://icedrive.net/0/aaZPbVxMPC'
    };
    this.name = name;
    this.id = id;
    this.email = email;
}

module.exports = Employee;