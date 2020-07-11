const connection = require("./config")

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
    let employeeIns=`INSERT INTO employees(first_name,last_name,roleID) values(?,?)`
    let employee =[
                    [`${first_name}`],
                    [`${last_name}`],
                    [`${roleID}`]
];

    connection.query(employeeIns,employee)
    console.log("added a new employee");
}
//tests for the add functions
addDepartment('newbs lab');
addRole('inturn',20000.00,1);
addEmployee("Michael","Jaeschke",1);
