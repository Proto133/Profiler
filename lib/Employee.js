const Employee = function(profilePicture, name, id, email) {
    if (profilePicture) {
        this.profilePicture = profilePicture
    } else {
        this.profilePicture = 'https://icecube-us-846.icedrive.io/thumbnail?p=TsjPQlGjhy84SSe17FBre0VCoWQdFP46xr0Skmf7Vakb0w41HnNdNmeEwWnfUWq3k7%2FFrQahefqY0UeOm2cDMTIiH3slMDg%2BMAEK85yc04JkUL86CcdpC7OzXbaKu%2BCK&w=1280&h=1280&m=cropped'
    };
    this.name = name;
    this.id = id;
    this.email = email;
}

Employee.prototype.getPic = function() {
    return this.profilePicture;
}

Employee.prototype.getName = function() {
    return this.name;
}

Employee.prototype.getId = function() {
    return this.id;
}

Employee.prototype.getEmail = function() {
    return this.email;
}

module.exports = Employee;