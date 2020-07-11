const connection = require("./config")
const cTable = require('console.table');
var inquirer = require("inquirer");


start();
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
                "Add Department",
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
            case "Add Department":
                addDepartment();
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
    connection.query("SELECT * FROM departments,employees,roles",function(err,result,fields){
        console.table(result);
        start();
    });
}
function viewByDep(){
    connection.query("SELECT * FROM departments,employees",function(err,result,fields){
        console.table(result);
        start();
    });
}


function addDepartment() {
    connection.query("SELECT * FROM departments", (err, results) => {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    name: "departmentName",
                    type: "input",
                    message: "what is the employees department name?"
                }

            ])
            .then((answer) => {
            let depIns=`INSERT INTO departments(departmentName) values(?)`
            let departmentName =[`${answer.departmentName}`];
                    connection.query(depIns,departmentName);

                console.log("Successfully added department");
                start();
            });            
    });
} 



function addEmployee (){
    connection.query("SELECT * FROM employees", (err, results) => {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    name: "first_name",
                    type: "input",
                    message: "Type in employees first name?"
                },
                {
                    name: "last_name",
                    type: "input",
                    message: "Type in employees last name?"
                },
                {
                    name: "roleID",
                    type: "input",
                    message: "what is the employees role id?"
                },
  
            ])
            .then((answer) => {
            let employeeIns=`INSERT INTO employees(first_name,last_name,roleID) values(?,?,?)`
            let employee =[
                    [`${answer.first_name}`],
                    [`${answer.last_name}`],
                    [`${answer.roleID}`]
                ];
                    connection.query(employeeIns,employee);

                console.log("Successfully added employee");
                start();
            });            
    });  
  } 
  function addRole (){
    connection.query("SELECT * FROM roles", (err, results) => {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    name: "title",
                    type: "input",
                    message: "what is the employees title?"
                },
                {
                    name: "salary",
                    type: "input",
                    message: "what is the employees salary?"
                },
                {
                    name: "departmentID",
                    type: "input",
                    message: "what is the employees department id?"
                },
  
            ])
            .then((answer) => {
                let roleIns=`INSERT INTO roles(title,salary,departmentID) values(?,?,?)`
                let role=[
                        [`${answer.title}`],
                        [`${answer.salary}`],
                        [`${answer.departmentID}`]
                    ];
                        connection.query(roleIns,role);
    
                    console.log("Successfully added role");
                    start();
                });            
        });  
      } 

//tests for the add functions
//addDepartment('newbs lab');
//addRole('inturn',20000.00,1);
//addEmployee("Michael","Jaeschke",1);
//viewALL();

//connection.end();