//import modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

//link local JS
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

//Employees Array
const employees = []

function init() {
    confirmStart();
}

function mkOutput() {
    fs.mkdir(path.join(process.cwd(), 'output'), (err) => {
        if (err) {
            return err.message
        }
        return 'Directory created successfully!'
    })

}

function confirmStart() {
    inquirer.prompt({
        type: 'confirm',
        message: 'Would you like to create a new Team Profile?',
        name: 'startBuild'
    }).then((response) => {
        if (response.startBuild == false) {
            return "Ok, comeback when you're ready"
        } else {
            inquirer.prompt([{
                type: 'input',
                message: 'Please Enter the name of your Organization (or Team):',
                name: 'teamName'
            }]).then((response) => {
                mkOutput();
                startHtml(response.teamName);
                addMember(response.teamName);
            })
        }
    })
}

function addMember(teamName) {
    inquirer.prompt([{
                type: 'input',
                message: "Enter team member's name:",
                name: "name"
            },
            {
                type: 'input',
                message: "Enter the relative path to profile picture (random placholder will be added by default)",
                name: "profilePicture"
            },
            {
                type: "list",
                message: "What is the team member's role:",
                choices: [
                    "Engineer",
                    "Intern",
                    "Manager"
                ],
                name: "role"
            },
            {
                type: 'input',
                message: "Enter team member's id:",
                name: "id"
            },
            {
                type: 'input',
                message: "Enter team member's email address:",
                name: "email"
            }
        ])
        .then(function({ name, role, id, email }) {
            let roleInfo = "";
            if (role === "Engineer") {
                roleInfo = "GitHub username";
            } else if (role === "Intern") {
                roleInfo = "school name";
            } else {
                roleInfo = "office phone number";
            }
            inquirer.prompt([{
                        message: `Enter team member's ${roleInfo}`,
                        name: "roleInfo"
                    },
                    {
                        type: "list",
                        message: "Would you like to add more team members?",
                        choices: [
                            "yes",
                            "no"
                        ],
                        name: "moreMembers"
                    }
                ])
                .then(function({ roleInfo, moreMembers }) {
                    let newMember;
                    if (role === "Engineer") {
                        newMember = new Engineer(role, name, id, email, roleInfo);
                    } else if (role === "Intern") {
                        newMember = new Intern(role, name, id, email, roleInfo);
                    } else {
                        newMember = new Manager(role, name, id, email, roleInfo);
                    }
                    console.log(newMember);
                    employees.push(newMember);
                    addHtml(newMember, teamName)
                        .then(function() {
                            if (moreMembers === "yes") {
                                addMember();
                            } else {
                                finishHtml();
                            }
                        });

                });
        });
}

function startHtml(teamName) {
    const html = `<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <!-- Compiled and minified JavaScript -->
        <script defer src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <title> Meet ${teamName}</title>
        <style>
        main{display:flex; flex-direction: row; flex-wrap:wrap; justify-content: space-evenly;}
        header{background-color:#76008e; position: fixed; top: 0;}
        h1{text-align:center;font-family:Helvetica, sans-serif;font-variant:small-caps;color:#ffffff;}
        </style>
    </head>
    <body>
    <header>
    <h1> Meet ${teamName}</h1>
    </header>
    <main>`

    fs.writeFile("./output/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log(`HTML Started With Name of ${teamName}`);
}

function addHtml(member, teamName) {
    return new Promise(function(resolve, reject) {
        console.log('member = ', member)
        console.log('TeamName=', teamName)
        const name = member.name;
        const role = member.role;
        const id = member.id;
        const email = member.email;
        let data = "";
        console.log('role =', role)
        if (role === "Engineer") {
            const github = Engineer.github;
            data = `
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">${name}<i class="material-icons right">more_vert</i></span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">${teamName} : Engineer<i class="material-icons right">close</i></span>
                <ul class="collection with-header">
                <li class="collection-header"><h4>${name}</h4></li>
                <li class="collection-item">Role: Engineer </li>
                <li class="collection-item">ID: ${id}</li>
                <li class="collection-item">Email Address: ${email}</li>
                <li class="collection-item">Github: ${github}</li>
              </ul>
              </div>
            </div>`;
        } else if (role === "Intern") {
            const school = Intern.school;
            data = ` <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="images/office.jpg">
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">${name}<i class="material-icons right">more_vert</i></span>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">${teamName}'s ${role}<i class="material-icons right">close</i></span>
              <ul class="collection with-header">
              <li class="collection-header"><h4>${name}</h4></li>
              <li class="collection-item">Role: Itern </li>
              <li class="collection-item">ID: ${id}</li>
              <li class="collection-item">Email Address: ${email}</li>
              <li class="collection-item">School: ${school}</li>{github}</li>
            </ul>
            </div>
          </div>`;
        } else {
            const officePhone = Manager.officeNumber;
            data = `  <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="images/office.jpg">
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">${name}<i class="material-icons right">more_vert</i></span>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">${teamName}'s ${role}<i class="material-icons right">close</i></span>
              <ul class="collection with-header">
              <li class="collection-header"><h4>${name}</h4></li>
              <li class="collection-item">Role: Engineer </li>
              <li class="collection-item">ID: ${id}</li>
              <li class="collection-item">Email Address: ${email}</li>
              <li class="collection-item">Office Number: ${officePhone}</li>
            </ul>
            </div>
          </div> `
        }
        console.log("adding team member");
        fs.appendFile("./output/team.html", data, function(err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}

function finishHtml() {
    const html = `  </main>   
</body>
</html>`;

    fs.appendFile("./output/team.html", html, function(err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}

init();