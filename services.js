const connection = require("./config")
     
function addDepartment(name) {
    connection.query(`INSERT INTO department(departmentName)
                     values(${name})`)
}

function addRole(title,salary) {
    connection.query(`INSERT INTO roles(title, salery)
                     values(${title,salary})`)
}
function addEmployee(firstName,lastName) {
    connection.query(`INSERT INTO employee(first_name, last_name)
                     values(${title,salary})`)
}

