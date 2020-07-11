const connection = require("./config")
const cTable = require('console.table');
var inquirer = require("inquirer");



function start(){
    inquirer 
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do",
            choices: [
                "View All Employees",
                "View All Employees by Department",
                "Add Employee",
                "Update Employee Role",
                "Add Role",
                "Exit"
            ]
    })
    .then(function(results){
        switch(results.action) {
            case "View All Employees":
                viewALL();
                break;

            case "View All Employees by Department":
                viewByDep();
                break;
        
            case "Add Employee":
                addEmployee();
                break;
        
            case "Update Employee Role":
                updateEmRole();
                break;

            case "Add Role":
                addRole();
                break;

            case "Exit":
                connection.end();
                break;

        }
    })
}


function viewALL(){
    connection.query("SELECT * FROM departments;");
    const table = cTable.getTable([connection]);
    console.table(table);
}



function addDepartment(departmentName) {
    let depIns =`INSERT INTO departments(departmentName) values(?)`;
    departmentName = [`${departmentName}`];
    connection.query(depIns,departmentName);
    console.log("added a new department");
}

function addRole(title,salary,departmentID) {
    let roleIns =`INSERT INTO roles(title, salary,departmentID) values(?,?,?)`
    let role =[
                [`${title}`],
                [`${salary}`],
                [`${departmentID}`]
        ];
    connection.query(roleIns,role);
    console.log("added a new role");
}
function addEmployee(first_name,last_name,roleID) {
    let employeeIns=`INSERT INTO employees(first_name,last_name,roleID) values(?,?,?)`
    let employee =[
                    [`${first_name}`],
                    [`${last_name}`],
                    [`${roleID}`]
];

    connection.query(employeeIns,employee)
    console.log("added a new employee");
}
//tests for the add functions
//addDepartment('newbs lab');
//addRole('inturn',20000.00,1);
//addEmployee("Michael","Jaeschke",1);
viewALL();
connection.end();